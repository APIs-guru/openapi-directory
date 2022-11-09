import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EditCustomerMatchMembersResponse
/** 
 * The response of FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
**/
export class EditCustomerMatchMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstAndThirdPartyAudienceId" })
  firstAndThirdPartyAudienceId?: string;
}
