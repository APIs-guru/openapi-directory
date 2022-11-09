import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTeamTemplateDetailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_template_id" })
  teamTemplateId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTeamTemplateDetailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamTemplateDetailPathParams;
}


export class GetTeamTemplateDetailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamTemplateExpandVo?: any;
}
