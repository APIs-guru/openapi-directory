import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostExchangeRatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostExchangeRateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  multiExchangeRatePersistListVo?: any;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" })
  multiExchangeRatePersistListVo1?: any;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PostExchangeRateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostExchangeRatePathParams;

  @SpeakeasyMetadata()
  request?: PostExchangeRateRequests;
}


export class PostExchangeRateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatus?: any;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
