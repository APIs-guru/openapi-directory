import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostStoreCreateJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth_token" })
  authToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_code" })
  partnerCode: string;
}


export class PostStoreCreateJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostStoreCreateJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PartnerStoreCreate;
}


export class PostStoreCreateJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partnerError?: shared.PartnerError;

  @SpeakeasyMetadata()
  partnerStoreCode?: shared.PartnerStoreCode;

  @SpeakeasyMetadata()
  statusCode: number;
}
