import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTeamTemplateDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_template_id" })
  teamTemplateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTeamTemplateDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamTemplateDetailPathParams;
}


export class GetTeamTemplateDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamTemplateExpandVo?: any;
}
