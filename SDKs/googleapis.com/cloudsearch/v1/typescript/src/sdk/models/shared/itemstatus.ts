import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProcessingError } from "./processingerror";
import { RepositoryError } from "./repositoryerror";

export enum ItemStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    Error = "ERROR"
,    Modified = "MODIFIED"
,    NewItem = "NEW_ITEM"
,    Accepted = "ACCEPTED"
}


// ItemStatus
/** 
 * This contains item's status and any errors.
**/
export class ItemStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: ItemStatusCodeEnum;

  @Metadata({ data: "json, name=processingErrors", elemType: shared.ProcessingError })
  processingErrors?: ProcessingError[];

  @Metadata({ data: "json, name=repositoryErrors", elemType: shared.RepositoryError })
  repositoryErrors?: RepositoryError[];
}
