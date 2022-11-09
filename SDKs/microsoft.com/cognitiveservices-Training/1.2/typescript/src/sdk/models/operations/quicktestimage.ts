import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QuickTestImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class QuickTestImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class QuickTestImageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class QuickTestImageRequestBodyImageData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageData" })
  imageData: string;
}


export class QuickTestImageRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageData: QuickTestImageRequestBodyImageData;
}


export class QuickTestImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: QuickTestImagePathParams;

  @Metadata()
  queryParams: QuickTestImageQueryParams;

  @Metadata()
  headers: QuickTestImageHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: QuickTestImageRequestBody;
}


export class QuickTestImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  imagePredictionResult?: shared.ImagePredictionResult;

  @Metadata()
  statusCode: number;
}
