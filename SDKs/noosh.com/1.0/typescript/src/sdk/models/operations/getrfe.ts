import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRfePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rfe_id" })
  rfeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetRfeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRfePathParams;
}


export class GetRfeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  rfeExpandVo?: any;

  @Metadata()
  statusCode: number;
}
