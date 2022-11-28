import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamRolesListQueryParams extends SpeakeasyBase {
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    name?: string;
    nameIc?: string;
    nameIe?: string;
    nameIew?: string;
    nameIsw?: string;
    nameN?: string;
    nameNic?: string;
    nameNie?: string;
    nameNiew?: string;
    nameNisw?: string;
    offset?: number;
    q?: string;
    slug?: string;
    slugIc?: string;
    slugIe?: string;
    slugIew?: string;
    slugIsw?: string;
    slugN?: string;
    slugNic?: string;
    slugNie?: string;
    slugNiew?: string;
    slugNisw?: string;
}
export declare class IpamRolesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Role[];
}
export declare class IpamRolesListRequest extends SpeakeasyBase {
    queryParams: IpamRolesListQueryParams;
}
export declare class IpamRolesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamRolesList200ApplicationJsonObject?: IpamRolesList200ApplicationJson;
}
