import { SpeakeasyBase } from "../../../internal/utils";
import { InboundSamlSsoProfile } from "./inboundsamlssoprofile";
/**
 * Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method.
**/
export declare class ListInboundSamlSsoProfilesResponse extends SpeakeasyBase {
    inboundSamlSsoProfiles?: InboundSamlSsoProfile[];
    nextPageToken?: string;
}
