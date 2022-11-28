import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetListeNoireGetListeNoireEnum {
    One = "1"
}


export class GetListeNoireQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getListeNoire" })
  getListeNoire: GetListeNoireGetListeNoireEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyid" })
  keyid: string;
}


export class GetListeNoireRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListeNoireQueryParams;
}


export class GetListeNoireResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erreur?: shared.Erreur;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getListeNoire200ApplicationJsonBinaryString?: Uint8Array;
}
