import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAutomaticInvitationListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetAutomaticInvitationListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAutomaticInvitationListPathParams;
}


export class GetAutomaticInvitationListResponse extends SpeakeasyBase {
  @Metadata()
  automaticInvitationsListVo?: any;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
