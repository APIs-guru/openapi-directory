import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetNamesOfficialSearchOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Kml = "kml"
,    Csv = "csv"
}

export enum GetNamesOfficialSearchOutputStyleEnum {
    Summary = "summary"
,    Detail = "detail"
}

export enum GetNamesOfficialSearchSortByEnum {
    Relevance = "relevance"
,    Name = "name"
,    FeatureType = "featureType"
,    DecisionDate = "decisionDate"
}


export class GetNamesOfficialSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exactSpelling" })
  exactSpelling?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=featureCategory" })
  featureCategory?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=featureClass" })
  featureClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=featureType" })
  featureType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetNamesOfficialSearchOutputFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputStyle" })
  outputStyle?: GetNamesOfficialSearchOutputStyleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetNamesOfficialSearchSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class GetNamesOfficialSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNamesOfficialSearchQueryParams;
}


export class GetNamesOfficialSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
