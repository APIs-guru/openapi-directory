import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRealmUsersIdRoleMappingsRealmPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class DeleteRealmUsersIdRoleMappingsRealmRequest extends SpeakeasyBase {
    pathParams: DeleteRealmUsersIdRoleMappingsRealmPathParams;
    request: shared.RoleRepresentation[];
}
export declare class DeleteRealmUsersIdRoleMappingsRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
