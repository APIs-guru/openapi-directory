import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetNamesDecisionsYearOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}

export enum GetNamesDecisionsYearOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}

export enum GetNamesDecisionsYearSortByEnum {
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}


export class GetNamesDecisionsYearQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureCategory" })
  featureCategory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureClass" })
  featureClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureType" })
  featureType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetNamesDecisionsYearOutputFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputStyle" })
  outputStyle?: GetNamesDecisionsYearOutputStyleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetNamesDecisionsYearSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetNamesDecisionsYearRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNamesDecisionsYearQueryParams;
}


export class GetNamesDecisionsYearResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
