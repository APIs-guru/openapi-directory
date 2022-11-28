import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUsersUserEmailSuspendPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PutUsersUserEmailSuspendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUsersUserEmailSuspendPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SuspendedRequest;
}


export class PutUsersUserEmailSuspendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
