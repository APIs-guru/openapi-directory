import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPlatformsListQueryParams extends SpeakeasyBase {
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
    manufacturer?: string;
    manufacturerN?: string;
    manufacturerId?: string;
    manufacturerIdN?: string;
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
    napalmDriver?: string;
    napalmDriverIc?: string;
    napalmDriverIe?: string;
    napalmDriverIew?: string;
    napalmDriverIsw?: string;
    napalmDriverN?: string;
    napalmDriverNic?: string;
    napalmDriverNie?: string;
    napalmDriverNiew?: string;
    napalmDriverNisw?: string;
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
export declare class DcimPlatformsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Platform[];
}
export declare class DcimPlatformsListRequest extends SpeakeasyBase {
    queryParams: DcimPlatformsListQueryParams;
}
export declare class DcimPlatformsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimPlatformsList200ApplicationJsonObject?: DcimPlatformsList200ApplicationJson;
}
