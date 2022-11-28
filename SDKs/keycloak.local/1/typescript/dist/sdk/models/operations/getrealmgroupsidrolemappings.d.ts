import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupsIdRoleMappingsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmGroupsIdRoleMappingsRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsIdRoleMappingsPathParams;
}
export declare class GetRealmGroupsIdRoleMappingsResponse extends SpeakeasyBase {
    contentType: string;
    mappingsRepresentation?: shared.MappingsRepresentation;
    statusCode: number;
}
