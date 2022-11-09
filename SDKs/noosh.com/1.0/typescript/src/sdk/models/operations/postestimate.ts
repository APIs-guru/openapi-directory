import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostEstimatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostEstimateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  estimatePo?: any;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  estimatePo1?: any;

  @Metadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PostEstimateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostEstimatePathParams;

  @Metadata()
  request?: PostEstimateRequests;
}


export class PostEstimateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  estimatePo?: any;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
