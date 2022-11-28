import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class UploadFileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=requestBody" })
  requestBody: string;
}


export class UploadFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadFilePathParams;

  @SpeakeasyMetadata({ data: "multipart_form, file=true, request, media_type=multipart/form-data" })
  request?: UploadFileRequestBody;
}


export class UploadFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileResponseVo?: any;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
