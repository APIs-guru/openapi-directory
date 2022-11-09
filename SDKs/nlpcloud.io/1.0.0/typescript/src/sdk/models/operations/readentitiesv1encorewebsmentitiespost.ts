import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReadEntitiesV1EnCoreWebSmEntitiesPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserRequestIn;
}


export class ReadEntitiesV1EnCoreWebSmEntitiesPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entitiesOut?: shared.EntitiesOut;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
