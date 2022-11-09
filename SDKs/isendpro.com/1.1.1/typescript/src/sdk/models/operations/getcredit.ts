import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCreditCreditEnum {
    One = "1"
,    Two = "2"
}


export class GetCreditQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=credit" })
  credit: GetCreditCreditEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyid" })
  keyid: string;
}


export class GetCreditRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreditQueryParams;
}


export class GetCreditResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  creditResponse?: shared.CreditResponse;

  @Metadata()
  erreur?: shared.Erreur;

  @Metadata()
  statusCode: number;
}
