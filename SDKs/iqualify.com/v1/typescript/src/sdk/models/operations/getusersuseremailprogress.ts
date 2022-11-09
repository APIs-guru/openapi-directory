import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersUserEmailProgressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class GetUsersUserEmailProgressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersUserEmailProgressPathParams;
}


export class GetUsersUserEmailProgressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  learnerResponse?: shared.LearnerResponse;

  @Metadata()
  statusCode: number;
}
