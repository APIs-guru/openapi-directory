import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateImagesFromDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class CreateImagesFromDataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string[];
}


export class CreateImagesFromDataHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class CreateImagesFromDataRequestBodyImageData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageData" })
  imageData: string;
}


export class CreateImagesFromDataRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageData: CreateImagesFromDataRequestBodyImageData;
}


export class CreateImagesFromDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateImagesFromDataPathParams;

  @Metadata()
  queryParams: CreateImagesFromDataQueryParams;

  @Metadata()
  headers: CreateImagesFromDataHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: CreateImagesFromDataRequestBody;
}


export class CreateImagesFromDataResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  imageCreateSummary?: shared.ImageCreateSummary;

  @Metadata()
  statusCode: number;
}
