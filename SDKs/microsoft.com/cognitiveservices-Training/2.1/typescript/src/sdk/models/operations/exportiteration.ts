import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportIterationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=iterationId" })
  iterationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}

export enum ExportIterationFlavorEnum {
    Linux = "Linux"
,    Windows = "Windows"
}

export enum ExportIterationPlatformEnum {
    CoreMl = "CoreML"
,    TensorFlow = "TensorFlow"
,    DockerFile = "DockerFile"
,    Onnx = "ONNX"
}


export class ExportIterationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=flavor" })
  flavor?: ExportIterationFlavorEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform: ExportIterationPlatformEnum;
}


export class ExportIterationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class ExportIterationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExportIterationPathParams;

  @Metadata()
  queryParams: ExportIterationQueryParams;

  @Metadata()
  headers: ExportIterationHeaders;
}


export class ExportIterationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  export?: shared.Export;

  @Metadata()
  statusCode: number;
}
