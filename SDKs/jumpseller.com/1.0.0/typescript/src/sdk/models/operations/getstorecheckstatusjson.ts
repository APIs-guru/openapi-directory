import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStoreCheckStatusJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auth_token" })
  authToken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_code" })
  partnerCode: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=store_code" })
  storeCode: string;
}


export class GetStoreCheckStatusJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStoreCheckStatusJsonQueryParams;
}


export class GetStoreCheckStatusJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStoreCheckStatusJson200ApplicationJsonOneOf?: any;

  @Metadata()
  partnerError?: shared.PartnerError;

  @Metadata()
  statusCode: number;
}
