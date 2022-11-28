import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangeRecoveryQuestionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ChangeRecoveryQuestionRequestBodyPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ChangeRecoveryQuestionRequestBodyRecoveryQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: string;
}


export class ChangeRecoveryQuestionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: ChangeRecoveryQuestionRequestBodyPassword;

  @SpeakeasyMetadata({ data: "json, name=recovery_question" })
  recoveryQuestion?: ChangeRecoveryQuestionRequestBodyRecoveryQuestion;
}


export class ChangeRecoveryQuestionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeRecoveryQuestionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ChangeRecoveryQuestionRequestBody;
}


export class ChangeRecoveryQuestionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
