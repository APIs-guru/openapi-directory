import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostBuyOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostBuyOrderRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  orderPo?: any;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  orderPo1?: any;

  @Metadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PostBuyOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostBuyOrderPathParams;

  @Metadata()
  request?: PostBuyOrderRequests;
}


export class PostBuyOrderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  orderPo?: any;

  @Metadata()
  statusCode: number;
}
