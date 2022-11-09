import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactInfoList } from "./contactinfolist";
import { MobileDeviceIdList } from "./mobiledeviceidlist";


// EditCustomerMatchMembersRequest
/** 
 * Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
**/
export class EditCustomerMatchMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedContactInfoList" })
  addedContactInfoList?: ContactInfoList;

  @Metadata({ data: "json, name=addedMobileDeviceIdList" })
  addedMobileDeviceIdList?: MobileDeviceIdList;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;
}
