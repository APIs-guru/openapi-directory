import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetNamesDecisionsYearOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Kml = "kml"
,    Csv = "csv"
}

export enum GetNamesDecisionsYearOutputStyleEnum {
    Summary = "summary"
,    Detail = "detail"
}

export enum GetNamesDecisionsYearSortByEnum {
    Name = "name"
,    FeatureType = "featureType"
,    DecisionDate = "decisionDate"
}


export class GetNamesDecisionsYearQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=featureCategory" })
  featureCategory?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=featureClass" })
  featureClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=featureType" })
  featureType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetNamesDecisionsYearOutputFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputStyle" })
  outputStyle?: GetNamesDecisionsYearOutputStyleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetNamesDecisionsYearSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetNamesDecisionsYearRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNamesDecisionsYearQueryParams;
}


export class GetNamesDecisionsYearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
