import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUserPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserPolicyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  userPolicy?: shared.UserPolicy;

  @Metadata({ data: "request, media_type=application/json" })
  userPolicy1?: shared.UserPolicy;

  @Metadata({ data: "request, media_type=text/json" })
  userPolicy2?: shared.UserPolicy;
}


export class UpdateUserPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUserPolicyPathParams;

  @Metadata()
  request: UpdateUserPolicyRequests;

  @Metadata()
  security: UpdateUserPolicySecurity;
}


export class UpdateUserPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
