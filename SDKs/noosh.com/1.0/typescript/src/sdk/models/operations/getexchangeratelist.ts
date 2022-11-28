import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetExchangeRateListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetExchangeRateListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExchangeRateListPathParams;
}


export class GetExchangeRateListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  multiExchangeRateListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
