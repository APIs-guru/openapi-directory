import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmAuthenticationFlowsIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmAuthenticationFlowsIdRequest extends SpeakeasyBase {
    pathParams: GetRealmAuthenticationFlowsIdPathParams;
}
export declare class GetRealmAuthenticationFlowsIdResponse extends SpeakeasyBase {
    authenticationFlowRepresentation?: shared.AuthenticationFlowRepresentation;
    contentType: string;
    statusCode: number;
}
