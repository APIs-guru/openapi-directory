import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersUserEmailInviteEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PostUsersUserEmailInviteEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersUserEmailInviteEmailPathParams;
}


export class PostUsersUserEmailInviteEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
