import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UploadProfileImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class UploadProfileImageRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=*/*" })
  wildcard: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  binaryString?: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  binaryString1?: Uint8Array;
}


export class UploadProfileImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadProfileImagePathParams;

  @Metadata()
  request?: UploadProfileImageRequests;
}


export class UploadProfileImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  profileImageVo?: any;

  @Metadata()
  statusCode: number;
}
