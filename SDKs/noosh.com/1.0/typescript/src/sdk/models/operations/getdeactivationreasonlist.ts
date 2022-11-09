import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeactivationReasonListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetDeactivationReasonListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeactivationReasonListPathParams;
}


export class GetDeactivationReasonListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  deactivationReasonListVo?: any;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
