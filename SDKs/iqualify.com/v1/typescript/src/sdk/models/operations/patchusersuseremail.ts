import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchUsersUserEmailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PatchUsersUserEmailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchUsersUserEmailPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.User;
}


export class PatchUsersUserEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  userResponse?: shared.UserResponse;
}
