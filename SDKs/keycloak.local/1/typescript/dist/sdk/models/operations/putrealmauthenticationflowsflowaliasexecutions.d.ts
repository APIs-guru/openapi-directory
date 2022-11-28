import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams extends SpeakeasyBase {
    flowAlias: string;
    realm: string;
}
export declare class PutRealmAuthenticationFlowsFlowAliasExecutionsRequest extends SpeakeasyBase {
    pathParams: PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams;
    request: shared.AuthenticationExecutionInfoRepresentation;
}
export declare class PutRealmAuthenticationFlowsFlowAliasExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
