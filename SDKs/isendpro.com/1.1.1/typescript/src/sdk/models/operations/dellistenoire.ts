import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DelListeNoireDelListeNoireEnum {
    One = "1"
}


export class DelListeNoireQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=delListeNoire" })
  delListeNoire: DelListeNoireDelListeNoireEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyid" })
  keyid: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=num" })
  num: string;
}


export class DelListeNoireRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DelListeNoireQueryParams;
}


export class DelListeNoireResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  erreur?: shared.Erreur;

  @Metadata()
  listenoireReponse?: shared.ListenoireReponse;

  @Metadata()
  statusCode: number;
}
