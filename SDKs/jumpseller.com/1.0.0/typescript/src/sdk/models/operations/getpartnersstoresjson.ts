import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPartnersStoresJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auth_token" })
  authToken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_code" })
  partnerCode: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;
}


export class GetPartnersStoresJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPartnersStoresJsonQueryParams;
}


export class GetPartnersStoresJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  partnerError?: shared.PartnerError;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Type })
  types?: shared.Type[];
}
