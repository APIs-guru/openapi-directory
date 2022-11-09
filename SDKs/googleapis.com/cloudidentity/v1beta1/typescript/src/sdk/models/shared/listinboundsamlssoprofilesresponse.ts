import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InboundSamlSsoProfile } from "./inboundsamlssoprofile";


// ListInboundSamlSsoProfilesResponse
/** 
 * Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method.
**/
export class ListInboundSamlSsoProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inboundSamlSsoProfiles", elemType: shared.InboundSamlSsoProfile })
  inboundSamlSsoProfiles?: InboundSamlSsoProfile[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
