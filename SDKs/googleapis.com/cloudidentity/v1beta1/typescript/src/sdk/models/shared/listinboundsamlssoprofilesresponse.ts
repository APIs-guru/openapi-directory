import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InboundSamlSsoProfile } from "./inboundsamlssoprofile";



// ListInboundSamlSsoProfilesResponse
/** 
 * Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method.
**/
export class ListInboundSamlSsoProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inboundSamlSsoProfiles", elemType: InboundSamlSsoProfile })
  inboundSamlSsoProfiles?: InboundSamlSsoProfile[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
