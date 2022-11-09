import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostStoreCreateJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auth_token" })
  authToken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partner_code" })
  partnerCode: string;
}


export class PostStoreCreateJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostStoreCreateJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PartnerStoreCreate;
}


export class PostStoreCreateJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  partnerError?: shared.PartnerError;

  @Metadata()
  partnerStoreCode?: shared.PartnerStoreCode;

  @Metadata()
  statusCode: number;
}
