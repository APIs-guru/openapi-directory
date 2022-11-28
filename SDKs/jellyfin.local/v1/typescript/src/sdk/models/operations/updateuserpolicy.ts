import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserPolicyRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  userPolicy?: shared.UserPolicyInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userPolicy1?: shared.UserPolicyInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  userPolicy2?: shared.UserPolicyInput;
}


export class UpdateUserPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserPolicyPathParams;

  @SpeakeasyMetadata()
  request: UpdateUserPolicyRequestsInput;

  @SpeakeasyMetadata()
  security: UpdateUserPolicySecurity;
}


export class UpdateUserPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
