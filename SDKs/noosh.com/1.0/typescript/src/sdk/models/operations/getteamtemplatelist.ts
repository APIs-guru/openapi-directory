import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTeamTemplateListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTeamTemplateListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamTemplateListPathParams;
}


export class GetTeamTemplateListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamTemplateListVo?: any;
}
