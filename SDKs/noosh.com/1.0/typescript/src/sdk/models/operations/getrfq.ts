import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRfqPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rfq_id" })
  rfqId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetRfqRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRfqPathParams;
}


export class GetRfqResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  rfqExpandVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
