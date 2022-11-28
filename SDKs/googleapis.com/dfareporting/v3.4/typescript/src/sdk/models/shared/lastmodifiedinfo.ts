import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LastModifiedInfo
/** 
 * Modification timestamp.
**/
export class LastModifiedInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
