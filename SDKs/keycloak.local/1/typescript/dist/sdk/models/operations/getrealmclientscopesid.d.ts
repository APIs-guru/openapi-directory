import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientScopesIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientScopesIdRequest extends SpeakeasyBase {
    pathParams: GetRealmClientScopesIdPathParams;
}
export declare class GetRealmClientScopesIdResponse extends SpeakeasyBase {
    clientScopeRepresentation?: shared.ClientScopeRepresentation;
    contentType: string;
    statusCode: number;
}
