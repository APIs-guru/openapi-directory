import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMyTimeCardListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetMyTimeCardListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyTimeCardListPathParams;
}


export class GetMyTimeCardListResponse extends SpeakeasyBase {
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
