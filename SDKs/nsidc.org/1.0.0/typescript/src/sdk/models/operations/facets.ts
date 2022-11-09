import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FacetsSortKeysEnum {
    ScoreDesc = "score,,desc"
,    SpatialAreaAsc = "spatial_area,,asc"
,    SpatialAreaDesc = "spatial_area,,desc"
,    TemporalDurationAsc = "temporal_duration,,asc"
,    TemporalDurationDesc = "temporal_duration,,desc"
,    UpdatedDesc = "updated,,desc"
}

export enum FacetsSourceEnum {
    Nsidc = "NSIDC"
,    Ade = "ADE"
}


export class FacetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facetFilters" })
  facetFilters?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerms" })
  searchTerms?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortKeys" })
  sortKeys?: FacetsSortKeysEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: FacetsSourceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=spatial" })
  spatial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class FacetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FacetsQueryParams;
}


export class FacetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  facets200ApplicationNsidcfacetsPlusXmlString?: string;
}
