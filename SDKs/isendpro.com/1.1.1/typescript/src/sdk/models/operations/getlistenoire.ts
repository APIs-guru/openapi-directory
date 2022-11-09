import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetListeNoireGetListeNoireEnum {
    One = "1"
}


export class GetListeNoireQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=getListeNoire" })
  getListeNoire: GetListeNoireGetListeNoireEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyid" })
  keyid: string;
}


export class GetListeNoireRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListeNoireQueryParams;
}


export class GetListeNoireResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  erreur?: shared.Erreur;

  @Metadata()
  statusCode: number;

  @Metadata()
  getListeNoire200ApplicationJsonBinaryString?: Uint8Array;
}
