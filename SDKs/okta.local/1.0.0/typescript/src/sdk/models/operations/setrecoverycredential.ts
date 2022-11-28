import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetRecoveryCredentialPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: string;
}


export class SetRecoveryCredentialRequestBodyCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recovery_question" })
  recoveryQuestion?: SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion;
}


export class SetRecoveryCredentialRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: SetRecoveryCredentialRequestBodyCredentials;
}


export class SetRecoveryCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetRecoveryCredentialPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SetRecoveryCredentialRequestBody;
}


export class SetRecoveryCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
