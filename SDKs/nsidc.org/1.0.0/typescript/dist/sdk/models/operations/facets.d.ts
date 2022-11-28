import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FacetsSortKeysEnum {
    ScoreDesc = "score,,desc",
    SpatialAreaAsc = "spatial_area,,asc",
    SpatialAreaDesc = "spatial_area,,desc",
    TemporalDurationAsc = "temporal_duration,,asc",
    TemporalDurationDesc = "temporal_duration,,desc",
    UpdatedDesc = "updated,,desc"
}
export declare enum FacetsSourceEnum {
    Nsidc = "NSIDC",
    Ade = "ADE"
}
export declare class FacetsQueryParams extends SpeakeasyBase {
    count?: number;
    endDate?: Date;
    facetFilters?: string;
    searchTerms?: string;
    sortKeys?: FacetsSortKeysEnum;
    source?: FacetsSourceEnum;
    spatial?: string;
    startDate?: Date;
    startIndex?: number;
}
export declare class FacetsRequest extends SpeakeasyBase {
    queryParams: FacetsQueryParams;
}
export declare class FacetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    facets200ApplicationNsidcfacetsPlusXmlString?: string;
}
