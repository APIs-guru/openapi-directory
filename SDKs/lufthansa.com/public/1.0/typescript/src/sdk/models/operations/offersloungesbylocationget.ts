import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OffersLoungesByLocationGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class OffersLoungesByLocationGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cabinClass" })
  cabinClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tierCode" })
  tierCode?: string;
}


export class OffersLoungesByLocationGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OffersLoungesByLocationGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OffersLoungesByLocationGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OffersLoungesByLocationGetPathParams;

  @Metadata()
  queryParams: OffersLoungesByLocationGetQueryParams;

  @Metadata()
  headers: OffersLoungesByLocationGetHeaders;

  @Metadata()
  security: OffersLoungesByLocationGetSecurity;
}


export class OffersLoungesByLocationGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  offersLoungesByLocationGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
