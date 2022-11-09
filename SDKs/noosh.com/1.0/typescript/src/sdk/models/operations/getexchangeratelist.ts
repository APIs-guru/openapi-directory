import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetExchangeRateListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetExchangeRateListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExchangeRateListPathParams;
}


export class GetExchangeRateListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  multiExchangeRateListVo?: any;

  @Metadata()
  statusCode: number;
}
