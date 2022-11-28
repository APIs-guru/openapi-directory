import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetNamesOfficialSearchOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}

export enum GetNamesOfficialSearchOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}

export enum GetNamesOfficialSearchSortByEnum {
    Relevance = "relevance",
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}


export class GetNamesOfficialSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exactSpelling" })
  exactSpelling?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureCategory" })
  featureCategory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureClass" })
  featureClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureType" })
  featureType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetNamesOfficialSearchOutputFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputStyle" })
  outputStyle?: GetNamesOfficialSearchOutputStyleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetNamesOfficialSearchSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class GetNamesOfficialSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNamesOfficialSearchQueryParams;
}


export class GetNamesOfficialSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
