import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRealmClientsIdScopeMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class DeleteRealmClientsIdScopeMappingsRealmRequest extends SpeakeasyBase {
    pathParams: DeleteRealmClientsIdScopeMappingsRealmPathParams;
    request: shared.RoleRepresentation[];
}
export declare class DeleteRealmClientsIdScopeMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
