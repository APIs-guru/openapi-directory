import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RepertoireRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RepertoirEmodifrequest;
}


export class RepertoireResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erreur?: shared.Erreur;

  @SpeakeasyMetadata()
  repertoirEmodifreponse?: shared.RepertoirEmodifreponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
