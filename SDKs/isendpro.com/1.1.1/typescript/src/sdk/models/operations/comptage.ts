import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ComptageRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ComptageRequest;
}


export class ComptageResponse extends SpeakeasyBase {
  @Metadata()
  comptageReponse?: shared.ComptageReponse;

  @Metadata()
  contentType: string;

  @Metadata()
  erreur?: shared.Erreur;

  @Metadata()
  statusCode: number;
}
