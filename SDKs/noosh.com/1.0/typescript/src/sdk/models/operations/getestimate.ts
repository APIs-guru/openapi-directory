import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEstimatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=estimate_id" })
  estimateId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetEstimateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEstimatePathParams;
}


export class GetEstimateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  estimateExpandVo?: any;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
