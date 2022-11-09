import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagSettings
/** 
 * Dynamic and Image Tag Settings.
**/
export class TagSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicTagEnabled" })
  dynamicTagEnabled?: boolean;

  @Metadata({ data: "json, name=imageTagEnabled" })
  imageTagEnabled?: boolean;
}
