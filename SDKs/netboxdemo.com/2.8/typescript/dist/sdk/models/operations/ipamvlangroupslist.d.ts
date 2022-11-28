import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlanGroupsListQueryParams extends SpeakeasyBase {
    description?: string;
    descriptionIc?: string;
    descriptionIe?: string;
    descriptionIew?: string;
    descriptionIsw?: string;
    descriptionN?: string;
    descriptionNic?: string;
    descriptionNie?: string;
    descriptionNiew?: string;
    descriptionNisw?: string;
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
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
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
export declare class IpamVlanGroupsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.VlanGroup[];
}
export declare class IpamVlanGroupsListRequest extends SpeakeasyBase {
    queryParams: IpamVlanGroupsListQueryParams;
}
export declare class IpamVlanGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamVlanGroupsList200ApplicationJsonObject?: IpamVlanGroupsList200ApplicationJson;
}
