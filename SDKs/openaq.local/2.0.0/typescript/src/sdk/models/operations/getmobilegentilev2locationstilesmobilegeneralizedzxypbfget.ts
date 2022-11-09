import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=x" })
  x: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=y" })
  y: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=z" })
  z: number;
}


export class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams extends SpeakeasyBase {
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


export class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams;

  @Metadata()
  queryParams: GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams;
}


export class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
