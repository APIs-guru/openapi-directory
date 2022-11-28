import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SetListeNoireSetlisteNoireEnum {
    One = "1"
}


export class SetListeNoireQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyid" })
  keyid: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=num" })
  num: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setlisteNoire" })
  setlisteNoire: SetListeNoireSetlisteNoireEnum;
}


export class SetListeNoireRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SetListeNoireQueryParams;
}


export class SetListeNoireResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erreur?: shared.Erreur;

  @SpeakeasyMetadata()
  listenoireReponse?: shared.ListenoireReponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
