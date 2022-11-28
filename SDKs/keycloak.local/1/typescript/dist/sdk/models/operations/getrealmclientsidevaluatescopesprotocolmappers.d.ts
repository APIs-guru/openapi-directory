import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdEvaluateScopesProtocolMappersPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdEvaluateScopesProtocolMappersQueryParams extends SpeakeasyBase {
    scope?: string;
}
export declare class GetRealmClientsIdEvaluateScopesProtocolMappersRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdEvaluateScopesProtocolMappersPathParams;
    queryParams: GetRealmClientsIdEvaluateScopesProtocolMappersQueryParams;
}
export declare class GetRealmClientsIdEvaluateScopesProtocolMappersResponse extends SpeakeasyBase {
    clientScopeEvaluateResourceProtocolMapperEvaluationRepresentations?: shared.ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation[];
    contentType: string;
    statusCode: number;
}
