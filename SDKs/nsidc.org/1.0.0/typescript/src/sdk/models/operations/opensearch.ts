import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OpenSearchSortKeysEnum {
    ScoreDesc = "score,,desc",
    SpatialAreaAsc = "spatial_area,,asc",
    SpatialAreaDesc = "spatial_area,,desc",
    TemporalDurationAsc = "temporal_duration,,asc",
    TemporalDurationDesc = "temporal_duration,,desc",
    UpdatedDesc = "updated,,desc"
}

export enum OpenSearchSourceEnum {
    Nsidc = "NSIDC",
    Ade = "ADE"
}


export class OpenSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facetFilters" })
  facetFilters?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerms" })
  searchTerms?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortKeys" })
  sortKeys?: OpenSearchSortKeysEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: OpenSearchSourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spatial" })
  spatial?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class OpenSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OpenSearchQueryParams;
}


export class OpenSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  openSearch200ApplicationAtomPlusXmlString?: string;
}
