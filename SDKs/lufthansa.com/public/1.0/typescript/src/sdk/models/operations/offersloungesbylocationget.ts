import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OffersLoungesByLocationGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class OffersLoungesByLocationGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cabinClass" })
  cabinClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tierCode" })
  tierCode?: string;
}


export class OffersLoungesByLocationGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OffersLoungesByLocationGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OffersLoungesByLocationGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OffersLoungesByLocationGetPathParams;

  @SpeakeasyMetadata()
  queryParams: OffersLoungesByLocationGetQueryParams;

  @SpeakeasyMetadata()
  headers: OffersLoungesByLocationGetHeaders;

  @SpeakeasyMetadata()
  security: OffersLoungesByLocationGetSecurity;
}


export class OffersLoungesByLocationGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  offersLoungesByLocationGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
