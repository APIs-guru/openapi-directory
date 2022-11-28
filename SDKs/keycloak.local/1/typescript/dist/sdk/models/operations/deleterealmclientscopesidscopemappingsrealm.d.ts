import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRealmClientScopesIdScopeMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class DeleteRealmClientScopesIdScopeMappingsRealmRequest extends SpeakeasyBase {
    pathParams: DeleteRealmClientScopesIdScopeMappingsRealmPathParams;
    request: shared.RoleRepresentation[];
}
export declare class DeleteRealmClientScopesIdScopeMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
