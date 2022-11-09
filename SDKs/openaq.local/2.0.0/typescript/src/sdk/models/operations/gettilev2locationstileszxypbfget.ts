import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTileV2LocationsTilesZXYPbfGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=x" })
  x: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=y" })
  y: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=z" })
  z: number;
}


export class GetTileV2LocationsTilesZXYPbfGetQueryParams extends SpeakeasyBase {
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


export class GetTileV2LocationsTilesZXYPbfGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTileV2LocationsTilesZXYPbfGetPathParams;

  @Metadata()
  queryParams: GetTileV2LocationsTilesZXYPbfGetQueryParams;
}


export class GetTileV2LocationsTilesZXYPbfGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
