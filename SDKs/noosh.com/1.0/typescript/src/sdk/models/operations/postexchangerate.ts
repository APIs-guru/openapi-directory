import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostExchangeRatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostExchangeRateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  multiExchangeRatePersistListVo?: any;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  multiExchangeRatePersistListVo1?: any;

  @Metadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PostExchangeRateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostExchangeRatePathParams;

  @Metadata()
  request?: PostExchangeRateRequests;
}


export class PostExchangeRateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatus?: any;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
