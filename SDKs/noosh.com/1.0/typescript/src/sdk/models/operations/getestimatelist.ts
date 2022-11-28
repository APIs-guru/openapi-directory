import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEstimateListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetEstimateListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEstimateListPathParams;
}


export class GetEstimateListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  estimateListExpandVo?: any;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
