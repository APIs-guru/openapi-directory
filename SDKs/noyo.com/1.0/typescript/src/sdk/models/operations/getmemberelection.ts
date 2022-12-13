import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMemberElectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_election_id" })
  memberElectionId: string;
}


export class GetMemberElectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMemberElectionPathParams;
}


export class GetMemberElectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberElectionResult?: shared.MemberElectionResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
