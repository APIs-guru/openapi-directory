import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagSettings
/** 
 * Dynamic and Image Tag Settings.
**/
export class TagSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicTagEnabled" })
  dynamicTagEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageTagEnabled" })
  imageTagEnabled?: boolean;
}
