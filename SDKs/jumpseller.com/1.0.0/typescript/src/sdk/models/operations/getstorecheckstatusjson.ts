import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStoreCheckStatusJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth_token" })
  authToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_code" })
  partnerCode: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=store_code" })
  storeCode: string;
}


export class GetStoreCheckStatusJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStoreCheckStatusJsonQueryParams;
}


export class GetStoreCheckStatusJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getStoreCheckStatusJson200ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  partnerError?: shared.PartnerError;

  @SpeakeasyMetadata()
  statusCode: number;
}
