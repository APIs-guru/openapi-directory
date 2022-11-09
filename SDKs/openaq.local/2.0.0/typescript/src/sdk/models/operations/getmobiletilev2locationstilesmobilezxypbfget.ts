import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=x" })
  x: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=y" })
  y: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=z" })
  z: number;
}


export class GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" })
  isAnalysis?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isMobile" })
  isMobile?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lastUpdatedFrom" })
  lastUpdatedFrom?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lastUpdatedTo" })
  lastUpdatedTo?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameter" })
  parameter?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: number;
}


export class GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams;

  @Metadata()
  queryParams: GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams;
}


export class GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
