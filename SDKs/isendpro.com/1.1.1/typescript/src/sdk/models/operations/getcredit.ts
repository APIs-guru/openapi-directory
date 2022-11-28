import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCreditCreditEnum {
    One = "1",
    Two = "2"
}


export class GetCreditQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=credit" })
  credit: GetCreditCreditEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyid" })
  keyid: string;
}


export class GetCreditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreditQueryParams;
}


export class GetCreditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  creditResponse?: shared.CreditResponse;

  @SpeakeasyMetadata()
  erreur?: shared.Erreur;

  @SpeakeasyMetadata()
  statusCode: number;
}
