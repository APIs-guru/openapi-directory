import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetNamesNotOfficialSearchOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}

export enum GetNamesNotOfficialSearchOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}

export enum GetNamesNotOfficialSearchSortByEnum {
    Relevance = "relevance",
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}


export class GetNamesNotOfficialSearchQueryParams extends SpeakeasyBase {
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
  outputFormat: GetNamesNotOfficialSearchOutputFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputStyle" })
  outputStyle?: GetNamesNotOfficialSearchOutputStyleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetNamesNotOfficialSearchSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class GetNamesNotOfficialSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNamesNotOfficialSearchQueryParams;
}


export class GetNamesNotOfficialSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
