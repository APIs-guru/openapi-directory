import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmAuthenticationFlowsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmAuthenticationFlowsRequest extends SpeakeasyBase {
    pathParams: GetRealmAuthenticationFlowsPathParams;
}
export declare class GetRealmAuthenticationFlowsResponse extends SpeakeasyBase {
    authenticationFlowRepresentations?: shared.AuthenticationFlowRepresentation[];
    contentType: string;
    statusCode: number;
}
