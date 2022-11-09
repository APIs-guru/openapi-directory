import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetNamesInsideOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Kml = "kml"
,    Csv = "csv"
}

export enum GetNamesInsideOutputStyleEnum {
    Summary = "summary"
,    Detail = "detail"
}

export enum GetNamesInsideSortByEnum {
    Name = "name"
,    FeatureType = "featureType"
,    DecisionDate = "decisionDate"
}


export class GetNamesInsideQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox: string;

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
  outputFormat: GetNamesInsideOutputFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputStyle" })
  outputStyle?: GetNamesInsideOutputStyleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetNamesInsideSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class GetNamesInsideRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNamesInsideQueryParams;
}


export class GetNamesInsideResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
