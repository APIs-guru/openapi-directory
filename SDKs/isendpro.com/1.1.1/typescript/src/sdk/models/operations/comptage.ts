import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ComptageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ComptageRequest;
}


export class ComptageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comptageReponse?: shared.ComptageReponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erreur?: shared.Erreur;

  @SpeakeasyMetadata()
  statusCode: number;
}
