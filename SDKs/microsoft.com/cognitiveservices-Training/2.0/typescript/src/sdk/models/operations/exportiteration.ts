import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportIterationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class ExportIterationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=flavor" })
  flavor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform: string;
}


export class ExportIterationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class ExportIterationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExportIterationPathParams;

  @SpeakeasyMetadata()
  queryParams: ExportIterationQueryParams;

  @SpeakeasyMetadata()
  headers: ExportIterationHeaders;
}


export class ExportIterationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  export?: shared.Export;

  @SpeakeasyMetadata()
  statusCode: number;
}
