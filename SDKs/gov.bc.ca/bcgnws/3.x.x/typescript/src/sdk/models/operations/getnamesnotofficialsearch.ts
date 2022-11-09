import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetNamesNotOfficialSearchOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Kml = "kml"
,    Csv = "csv"
}

export enum GetNamesNotOfficialSearchOutputStyleEnum {
    Summary = "summary"
,    Detail = "detail"
}

export enum GetNamesNotOfficialSearchSortByEnum {
    Relevance = "relevance"
,    Name = "name"
,    FeatureType = "featureType"
,    DecisionDate = "decisionDate"
}


export class GetNamesNotOfficialSearchQueryParams extends SpeakeasyBase {
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
  outputFormat: GetNamesNotOfficialSearchOutputFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputStyle" })
  outputStyle?: GetNamesNotOfficialSearchOutputStyleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetNamesNotOfficialSearchSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class GetNamesNotOfficialSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNamesNotOfficialSearchQueryParams;
}


export class GetNamesNotOfficialSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
