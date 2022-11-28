import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MobileDeviceIdList
/** 
 * Wrapper message for a list of mobile device IDs defining Customer Match audience members.
**/
export class MobileDeviceIdList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mobileDeviceIds" })
  mobileDeviceIds?: string[];
}
