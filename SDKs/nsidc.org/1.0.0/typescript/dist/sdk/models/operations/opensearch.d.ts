import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum OpenSearchSortKeysEnum {
    ScoreDesc = "score,,desc",
    SpatialAreaAsc = "spatial_area,,asc",
    SpatialAreaDesc = "spatial_area,,desc",
    TemporalDurationAsc = "temporal_duration,,asc",
    TemporalDurationDesc = "temporal_duration,,desc",
    UpdatedDesc = "updated,,desc"
}
export declare enum OpenSearchSourceEnum {
    Nsidc = "NSIDC",
    Ade = "ADE"
}
export declare class OpenSearchQueryParams extends SpeakeasyBase {
    count?: number;
    endDate?: Date;
    facetFilters?: string;
    searchTerms?: string;
    sortKeys?: OpenSearchSortKeysEnum;
    source?: OpenSearchSourceEnum;
    spatial?: string;
    startDate?: Date;
    startIndex?: number;
}
export declare class OpenSearchRequest extends SpeakeasyBase {
    queryParams: OpenSearchQueryParams;
}
export declare class OpenSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    openSearch200ApplicationAtomPlusXmlString?: string;
}
