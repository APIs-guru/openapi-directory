import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomListTargetingSetting
/** 
 * Details of custom list targeting setting.
**/
export class CustomListTargetingSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=customListId" })
  customListId?: string;
}
