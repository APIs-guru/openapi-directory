import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetNamesNearOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}

export enum GetNamesNearOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}

export enum GetNamesNearSortByEnum {
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}


export class GetNamesNearQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distance" })
  distance: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureCategory" })
  featureCategory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureClass" })
  featureClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featurePoint" })
  featurePoint: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureType" })
  featureType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetNamesNearOutputFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputStyle" })
  outputStyle?: GetNamesNearOutputStyleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetNamesNearSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class GetNamesNearRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNamesNearQueryParams;
}


export class GetNamesNearResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
