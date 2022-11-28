import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AquiferCodesProductivityListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class AquiferCodesProductivityList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.AquiferProductivity[];
}
export declare class AquiferCodesProductivityListRequest extends SpeakeasyBase {
    queryParams: AquiferCodesProductivityListQueryParams;
}
export declare class AquiferCodesProductivityListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    aquiferCodesProductivityList200ApplicationJsonObject?: AquiferCodesProductivityList200ApplicationJson;
}
