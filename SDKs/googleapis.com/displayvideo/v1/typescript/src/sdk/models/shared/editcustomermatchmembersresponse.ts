import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EditCustomerMatchMembersResponse
/** 
 * The response of FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
**/
export class EditCustomerMatchMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstAndThirdPartyAudienceId" })
  firstAndThirdPartyAudienceId?: string;
}
