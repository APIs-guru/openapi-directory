import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetNamesChangesOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Kml = "kml"
,    Csv = "csv"
}

export enum GetNamesChangesOutputStyleEnum {
    Summary = "summary"
,    Detail = "detail"
}

export enum GetNamesChangesSortByEnum {
    Name = "name"
,    FeatureType = "featureType"
,    DecisionDate = "decisionDate"
}


export class GetNamesChangesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=featureCategory" })
  featureCategory?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=featureClass" })
  featureClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=featureType" })
  featureType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetNamesChangesOutputFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputStyle" })
  outputStyle?: GetNamesChangesOutputStyleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetNamesChangesSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate: number;
}


export class GetNamesChangesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNamesChangesQueryParams;
}


export class GetNamesChangesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
