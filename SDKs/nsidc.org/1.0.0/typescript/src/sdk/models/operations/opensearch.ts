import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OpenSearchSortKeysEnum {
    ScoreDesc = "score,,desc"
,    SpatialAreaAsc = "spatial_area,,asc"
,    SpatialAreaDesc = "spatial_area,,desc"
,    TemporalDurationAsc = "temporal_duration,,asc"
,    TemporalDurationDesc = "temporal_duration,,desc"
,    UpdatedDesc = "updated,,desc"
}

export enum OpenSearchSourceEnum {
    Nsidc = "NSIDC"
,    Ade = "ADE"
}


export class OpenSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facetFilters" })
  facetFilters?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerms" })
  searchTerms?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortKeys" })
  sortKeys?: OpenSearchSortKeysEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: OpenSearchSourceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=spatial" })
  spatial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class OpenSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: OpenSearchQueryParams;
}


export class OpenSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  openSearch200ApplicationAtomPlusXmlString?: string;
}
