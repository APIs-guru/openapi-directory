import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientRegistrationPolicyProvidersPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmClientRegistrationPolicyProvidersRequest extends SpeakeasyBase {
    pathParams: GetRealmClientRegistrationPolicyProvidersPathParams;
}
export declare class GetRealmClientRegistrationPolicyProvidersResponse extends SpeakeasyBase {
    componentTypeRepresentations?: shared.ComponentTypeRepresentation[];
    contentType: string;
    statusCode: number;
}
