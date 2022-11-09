import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetRecoveryCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer" })
  answer?: string;

  @Metadata({ data: "json, name=question" })
  question?: string;
}


export class SetRecoveryCredentialRequestBodyCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=recovery_question" })
  recoveryQuestion?: SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion;
}


export class SetRecoveryCredentialRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials" })
  credentials?: SetRecoveryCredentialRequestBodyCredentials;
}


export class SetRecoveryCredentialRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetRecoveryCredentialPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: SetRecoveryCredentialRequestBody;
}


export class SetRecoveryCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
