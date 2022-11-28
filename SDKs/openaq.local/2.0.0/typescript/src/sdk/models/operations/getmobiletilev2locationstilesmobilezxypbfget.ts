import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=x" })
  x: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=y" })
  y: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=z" })
  z: number;
}


export class GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" })
  isAnalysis?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMobile" })
  isMobile?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastUpdatedFrom" })
  lastUpdatedFrom?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastUpdatedTo" })
  lastUpdatedTo?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter" })
  parameter?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: number;
}


export class GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams;
}


export class GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
