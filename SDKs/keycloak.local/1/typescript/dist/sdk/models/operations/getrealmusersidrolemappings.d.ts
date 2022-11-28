import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdRoleMappingsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdRoleMappingsRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdRoleMappingsPathParams;
}
export declare class GetRealmUsersIdRoleMappingsResponse extends SpeakeasyBase {
    contentType: string;
    mappingsRepresentation?: shared.MappingsRepresentation;
    statusCode: number;
}
