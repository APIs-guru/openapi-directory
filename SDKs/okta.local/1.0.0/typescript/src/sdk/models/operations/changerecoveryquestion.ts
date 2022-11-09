import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChangeRecoveryQuestionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ChangeRecoveryQuestionRequestBodyPassword extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ChangeRecoveryQuestionRequestBodyRecoveryQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer" })
  answer?: string;

  @Metadata({ data: "json, name=question" })
  question?: string;
}


export class ChangeRecoveryQuestionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: ChangeRecoveryQuestionRequestBodyPassword;

  @Metadata({ data: "json, name=recovery_question" })
  recoveryQuestion?: ChangeRecoveryQuestionRequestBodyRecoveryQuestion;
}


export class ChangeRecoveryQuestionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChangeRecoveryQuestionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ChangeRecoveryQuestionRequestBody;
}


export class ChangeRecoveryQuestionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
