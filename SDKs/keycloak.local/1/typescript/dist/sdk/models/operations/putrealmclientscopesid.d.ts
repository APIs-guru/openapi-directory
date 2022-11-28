import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmClientScopesIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmClientScopesIdRequest extends SpeakeasyBase {
    pathParams: PutRealmClientScopesIdPathParams;
    request: shared.ClientScopeRepresentation;
}
export declare class PutRealmClientScopesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
