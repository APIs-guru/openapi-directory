import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RepertoireCreaRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RepertoirEcreaterequest;
}


export class RepertoireCreaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  erreur?: shared.Erreur;

  @Metadata()
  repertoirEcreatereponse?: shared.RepertoirEcreatereponse;

  @Metadata()
  statusCode: number;
}
