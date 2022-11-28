import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetNamesDecisionsRecentOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}

export enum GetNamesDecisionsRecentOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}

export enum GetNamesDecisionsRecentSortByEnum {
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}


export class GetNamesDecisionsRecentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=days" })
  days: number;

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
  outputFormat: GetNamesDecisionsRecentOutputFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputStyle" })
  outputStyle?: GetNamesDecisionsRecentOutputStyleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: GetNamesDecisionsRecentSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;
}


export class GetNamesDecisionsRecentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNamesDecisionsRecentQueryParams;
}


export class GetNamesDecisionsRecentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
