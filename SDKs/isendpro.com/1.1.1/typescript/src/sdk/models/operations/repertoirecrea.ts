import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RepertoireCreaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RepertoirEcreaterequest;
}


export class RepertoireCreaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erreur?: shared.Erreur;

  @SpeakeasyMetadata()
  repertoirEcreatereponse?: shared.RepertoirEcreatereponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
