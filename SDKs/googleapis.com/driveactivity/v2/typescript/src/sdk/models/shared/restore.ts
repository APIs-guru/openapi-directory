import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RestoreTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Untrash = "UNTRASH"
}


// Restore
/** 
 * A deleted object was restored.
**/
export class Restore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RestoreTypeEnum;
}
