import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchUsersUserEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PatchUsersUserEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchUsersUserEmailPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.User;
}


export class PatchUsersUserEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userResponse?: shared.UserResponse;
}
