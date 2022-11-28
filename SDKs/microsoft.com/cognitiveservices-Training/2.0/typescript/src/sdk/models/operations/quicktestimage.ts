import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class QuickTestImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class QuickTestImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class QuickTestImageHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class QuickTestImageRequestBodyImageData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageData" })
  imageData: string;
}


export class QuickTestImageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageData: QuickTestImageRequestBodyImageData;
}


export class QuickTestImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QuickTestImagePathParams;

  @SpeakeasyMetadata()
  queryParams: QuickTestImageQueryParams;

  @SpeakeasyMetadata()
  headers: QuickTestImageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: QuickTestImageRequestBody;
}


export class QuickTestImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imagePrediction?: shared.ImagePrediction;

  @SpeakeasyMetadata()
  statusCode: number;
}
