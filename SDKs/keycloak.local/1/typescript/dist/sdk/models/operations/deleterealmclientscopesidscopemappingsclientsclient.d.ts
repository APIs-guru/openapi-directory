import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRealmClientScopesIdScopeMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class DeleteRealmClientScopesIdScopeMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: DeleteRealmClientScopesIdScopeMappingsClientsClientPathParams;
    request: shared.RoleRepresentation[];
}
export declare class DeleteRealmClientScopesIdScopeMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
