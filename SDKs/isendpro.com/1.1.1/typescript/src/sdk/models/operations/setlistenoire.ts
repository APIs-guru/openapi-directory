import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SetListeNoireSetlisteNoireEnum {
    One = "1"
}


export class SetListeNoireQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=keyid" })
  keyid: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=num" })
  num: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=setlisteNoire" })
  setlisteNoire: SetListeNoireSetlisteNoireEnum;
}


export class SetListeNoireRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SetListeNoireQueryParams;
}


export class SetListeNoireResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  erreur?: shared.Erreur;

  @Metadata()
  listenoireReponse?: shared.ListenoireReponse;

  @Metadata()
  statusCode: number;
}
