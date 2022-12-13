import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditMemberElectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_election_id" })
  memberElectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditMemberElectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditMemberElectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MemberElectionEditRequest;
}


export class EditMemberElectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberElectionResult?: shared.MemberElectionResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
