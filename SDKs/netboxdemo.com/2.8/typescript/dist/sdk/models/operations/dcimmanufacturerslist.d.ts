import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimManufacturersListQueryParams extends SpeakeasyBase {
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
export declare class DcimManufacturersList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Manufacturer[];
}
export declare class DcimManufacturersListRequest extends SpeakeasyBase {
    queryParams: DcimManufacturersListQueryParams;
}
export declare class DcimManufacturersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimManufacturersList200ApplicationJsonObject?: DcimManufacturersList200ApplicationJson;
}
