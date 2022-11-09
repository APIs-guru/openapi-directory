import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UploadBlobByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UploadBlobByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadBlobByIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: any;
}


export class UploadBlobByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
