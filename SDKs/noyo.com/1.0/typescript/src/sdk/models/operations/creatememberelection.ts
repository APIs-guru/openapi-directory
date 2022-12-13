import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateMemberElectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=plan_id" })
  planId: string;
}


export class CreateMemberElectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateMemberElectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MemberElectionCreateRequest;
}


export class CreateMemberElectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberElectionResult?: shared.MemberElectionResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
