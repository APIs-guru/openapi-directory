import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersUserEmailProgressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class GetUsersUserEmailProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserEmailProgressPathParams;
}


export class GetUsersUserEmailProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  learnerResponse?: shared.LearnerResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
