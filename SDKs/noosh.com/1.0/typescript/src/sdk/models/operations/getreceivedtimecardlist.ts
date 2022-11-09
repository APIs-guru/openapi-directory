import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReceivedTimeCardListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetReceivedTimeCardListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReceivedTimeCardListPathParams;
}


export class GetReceivedTimeCardListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  timeCardListVo?: any;
}
