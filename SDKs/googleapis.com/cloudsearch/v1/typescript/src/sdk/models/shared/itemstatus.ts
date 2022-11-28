import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingError } from "./processingerror";
import { RepositoryError } from "./repositoryerror";


export enum ItemStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Error = "ERROR",
    Modified = "MODIFIED",
    NewItem = "NEW_ITEM",
    Accepted = "ACCEPTED"
}


// ItemStatus
/** 
 * This contains item's status and any errors.
**/
export class ItemStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ItemStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=processingErrors", elemType: ProcessingError })
  processingErrors?: ProcessingError[];

  @SpeakeasyMetadata({ data: "json, name=repositoryErrors", elemType: RepositoryError })
  repositoryErrors?: RepositoryError[];
}
