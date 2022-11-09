import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEstimateListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetEstimateListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEstimateListPathParams;
}


export class GetEstimateListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  estimateListExpandVo?: any;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
