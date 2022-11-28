import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AquiferCodesQualityConcernsListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class AquiferCodesQualityConcernsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.QualityConcern[];
}
export declare class AquiferCodesQualityConcernsListRequest extends SpeakeasyBase {
    queryParams: AquiferCodesQualityConcernsListQueryParams;
}
export declare class AquiferCodesQualityConcernsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    aquiferCodesQualityConcernsList200ApplicationJsonObject?: AquiferCodesQualityConcernsList200ApplicationJson;
}
