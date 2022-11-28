import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FacetsSortKeysEnum {
    ScoreDesc = "score,,desc",
    SpatialAreaAsc = "spatial_area,,asc",
    SpatialAreaDesc = "spatial_area,,desc",
    TemporalDurationAsc = "temporal_duration,,asc",
    TemporalDurationDesc = "temporal_duration,,desc",
    UpdatedDesc = "updated,,desc"
}

export enum FacetsSourceEnum {
    Nsidc = "NSIDC",
    Ade = "ADE"
}


export class FacetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facetFilters" })
  facetFilters?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerms" })
  searchTerms?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortKeys" })
  sortKeys?: FacetsSortKeysEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: FacetsSourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spatial" })
  spatial?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class FacetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FacetsQueryParams;
}


export class FacetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  facets200ApplicationNsidcfacetsPlusXmlString?: string;
}
