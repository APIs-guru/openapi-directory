import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTeamTemplateListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTeamTemplateListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamTemplateListPathParams;
}


export class GetTeamTemplateListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamTemplateListVo?: any;
}
