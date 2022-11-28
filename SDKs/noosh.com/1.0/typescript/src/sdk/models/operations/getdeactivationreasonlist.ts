import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeactivationReasonListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetDeactivationReasonListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeactivationReasonListPathParams;
}


export class GetDeactivationReasonListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deactivationReasonListVo?: any;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
