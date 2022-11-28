import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadProfileImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class UploadProfileImageRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  wildcard: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  binaryString?: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" })
  binaryString1?: Uint8Array;
}


export class UploadProfileImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadProfileImagePathParams;

  @SpeakeasyMetadata()
  request?: UploadProfileImageRequests;
}


export class UploadProfileImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  profileImageVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
