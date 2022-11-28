import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2FieldListOptions } from "./googleappsdrivelabelsv2fieldlistoptions";



// GoogleAppsDriveLabelsV2FieldUserOptions
/** 
 * Options for the user field type.
**/
export class GoogleAppsDriveLabelsV2FieldUserOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listOptions" })
  listOptions?: GoogleAppsDriveLabelsV2FieldListOptions;
}
