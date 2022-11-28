import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DelListeNoireDelListeNoireEnum {
    One = "1"
}


export class DelListeNoireQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delListeNoire" })
  delListeNoire: DelListeNoireDelListeNoireEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyid" })
  keyid: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=num" })
  num: string;
}


export class DelListeNoireRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DelListeNoireQueryParams;
}


export class DelListeNoireResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erreur?: shared.Erreur;

  @SpeakeasyMetadata()
  listenoireReponse?: shared.ListenoireReponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
