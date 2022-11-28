import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UserRequestIn;
}


export class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  sentenceDependenciesOut?: shared.SentenceDependenciesOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
