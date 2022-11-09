import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RestoreTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Untrash = "UNTRASH"
}


// Restore
/** 
 * A deleted object was restored.
**/
export class Restore extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: RestoreTypeEnum;
}
