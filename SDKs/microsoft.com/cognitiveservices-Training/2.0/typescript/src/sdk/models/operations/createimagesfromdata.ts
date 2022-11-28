import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateImagesFromDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class CreateImagesFromDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string[];
}


export class CreateImagesFromDataHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class CreateImagesFromDataRequestBodyImageData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageData" })
  imageData: string;
}


export class CreateImagesFromDataRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageData: CreateImagesFromDataRequestBodyImageData;
}


export class CreateImagesFromDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateImagesFromDataPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateImagesFromDataQueryParams;

  @SpeakeasyMetadata()
  headers: CreateImagesFromDataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: CreateImagesFromDataRequestBody;
}


export class CreateImagesFromDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageCreateSummary?: shared.ImageCreateSummary;

  @SpeakeasyMetadata()
  statusCode: number;
}
