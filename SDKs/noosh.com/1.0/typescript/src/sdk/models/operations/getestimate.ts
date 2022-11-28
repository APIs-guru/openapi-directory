import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEstimatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=estimate_id" })
  estimateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetEstimateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEstimatePathParams;
}


export class GetEstimateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  estimateExpandVo?: any;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
