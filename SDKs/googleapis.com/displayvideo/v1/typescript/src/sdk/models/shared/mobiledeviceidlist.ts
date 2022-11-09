import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MobileDeviceIdList
/** 
 * Wrapper message for a list of mobile device IDs defining Customer Match audience members.
**/
export class MobileDeviceIdList extends SpeakeasyBase {
  @Metadata({ data: "json, name=mobileDeviceIds" })
  mobileDeviceIds?: string[];
}
