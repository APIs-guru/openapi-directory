import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UploadFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class UploadFileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=requestBody" })
  requestBody: string;
}


export class UploadFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadFilePathParams;

  @Metadata({ data: "multipart_form, file=true, request, media_type=multipart/form-data" })
  request?: UploadFileRequestBody;
}


export class UploadFileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  fileResponseVo?: any;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
