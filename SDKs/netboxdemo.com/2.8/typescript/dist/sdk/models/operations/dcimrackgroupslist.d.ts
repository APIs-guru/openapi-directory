import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackGroupsListQueryParams extends SpeakeasyBase {
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
    parent?: string;
    parentN?: string;
    parentId?: string;
    parentIdN?: string;
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
export declare class DcimRackGroupsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.RackGroup[];
}
export declare class DcimRackGroupsListRequest extends SpeakeasyBase {
    queryParams: DcimRackGroupsListQueryParams;
}
export declare class DcimRackGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimRackGroupsList200ApplicationJsonObject?: DcimRackGroupsList200ApplicationJson;
}
