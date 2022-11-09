import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReadDependenciesV1EnCoreWebSmDependenciesPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserRequestIn;
}


export class ReadDependenciesV1EnCoreWebSmDependenciesPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dependenciesOut?: shared.DependenciesOut;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
