import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DataLeakPreventionChangeTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Flagged = "FLAGGED"
,    Cleared = "CLEARED"
}


// DataLeakPreventionChange
/** 
 * A change in the object's data leak prevention status.
**/
export class DataLeakPreventionChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: DataLeakPreventionChangeTypeEnum;
}
