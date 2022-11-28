import { SpeakeasyBase } from "../../../internal/utils";
import { ContactInfoList } from "./contactinfolist";
import { MobileDeviceIdList } from "./mobiledeviceidlist";
/**
 * Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
**/
export declare class EditCustomerMatchMembersRequest extends SpeakeasyBase {
    addedContactInfoList?: ContactInfoList;
    addedMobileDeviceIdList?: MobileDeviceIdList;
    advertiserId?: string;
}
