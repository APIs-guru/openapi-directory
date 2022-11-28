import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPartnersStoresJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth_token" })
  authToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_code" })
  partnerCode: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;
}


export class GetPartnersStoresJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPartnersStoresJsonQueryParams;
}


export class GetPartnersStoresJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partnerError?: shared.PartnerError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Type })
  types?: shared.Type[];
}
