import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DataLeakPreventionChangeTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Flagged = "FLAGGED",
    Cleared = "CLEARED"
}


// DataLeakPreventionChange
/** 
 * A change in the object's data leak prevention status.
**/
export class DataLeakPreventionChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DataLeakPreventionChangeTypeEnum;
}
