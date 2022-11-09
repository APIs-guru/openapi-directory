import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RepertoireRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RepertoirEmodifrequest;
}


export class RepertoireResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  erreur?: shared.Erreur;

  @Metadata()
  repertoirEmodifreponse?: shared.RepertoirEmodifreponse;

  @Metadata()
  statusCode: number;
}
