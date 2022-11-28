import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimManufacturersListQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    slug?: string;
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
