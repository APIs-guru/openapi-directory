import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAutomaticInvitationListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetAutomaticInvitationListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAutomaticInvitationListPathParams;
}


export class GetAutomaticInvitationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  automaticInvitationsListVo?: any;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
