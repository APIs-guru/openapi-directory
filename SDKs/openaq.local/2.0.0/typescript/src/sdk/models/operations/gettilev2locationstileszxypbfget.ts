import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTileV2LocationsTilesZXYPbfGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=x" })
  x: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=y" })
  y: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=z" })
  z: number;
}


export class GetTileV2LocationsTilesZXYPbfGetQueryParams extends SpeakeasyBase {
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


export class GetTileV2LocationsTilesZXYPbfGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTileV2LocationsTilesZXYPbfGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTileV2LocationsTilesZXYPbfGetQueryParams;
}


export class GetTileV2LocationsTilesZXYPbfGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
