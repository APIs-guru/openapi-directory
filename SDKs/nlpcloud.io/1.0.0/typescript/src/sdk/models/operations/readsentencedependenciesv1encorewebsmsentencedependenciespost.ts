import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserRequestIn;
}


export class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  sentenceDependenciesOut?: shared.SentenceDependenciesOut;

  @Metadata()
  statusCode: number;
}
