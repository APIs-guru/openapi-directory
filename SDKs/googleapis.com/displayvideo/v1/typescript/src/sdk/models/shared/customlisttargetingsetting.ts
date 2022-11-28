import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomListTargetingSetting
/** 
 * Details of custom list targeting setting.
**/
export class CustomListTargetingSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customListId" })
  customListId?: string;
}
