import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRealmClientsIdScopeMappingsClientsClientPathParams extends SpeakeasyBase {
    client: string;
    id: string;
    realm: string;
}
export declare class DeleteRealmClientsIdScopeMappingsClientsClientRequest extends SpeakeasyBase {
    pathParams: DeleteRealmClientsIdScopeMappingsClientsClientPathParams;
    request: shared.RoleRepresentation[];
}
export declare class DeleteRealmClientsIdScopeMappingsClientsClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
