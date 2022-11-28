import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactInfoList } from "./contactinfolist";
import { MobileDeviceIdList } from "./mobiledeviceidlist";



// EditCustomerMatchMembersRequest
/** 
 * Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
**/
export class EditCustomerMatchMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addedContactInfoList" })
  addedContactInfoList?: ContactInfoList;

  @SpeakeasyMetadata({ data: "json, name=addedMobileDeviceIdList" })
  addedMobileDeviceIdList?: MobileDeviceIdList;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;
}
