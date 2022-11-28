import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRfePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostRfeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  rfePo?: any;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" })
  rfePo1?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PostRfeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRfePathParams;

  @SpeakeasyMetadata()
  request?: PostRfeRequests;
}


export class PostRfeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  rfqVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
