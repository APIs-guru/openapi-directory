import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmDefaultOptionalClientScopesPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmDefaultOptionalClientScopesRequest extends SpeakeasyBase {
    pathParams: GetRealmDefaultOptionalClientScopesPathParams;
}
export declare class GetRealmDefaultOptionalClientScopesResponse extends SpeakeasyBase {
    clientScopeRepresentations?: shared.ClientScopeRepresentation[];
    contentType: string;
    statusCode: number;
}
