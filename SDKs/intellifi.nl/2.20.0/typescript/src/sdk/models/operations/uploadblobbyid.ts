import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadBlobByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UploadBlobByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadBlobByIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: any;
}


export class UploadBlobByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
