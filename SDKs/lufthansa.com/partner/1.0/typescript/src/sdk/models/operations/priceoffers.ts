import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PriceOffersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;
}


export class PriceOffersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=departureDate" })
  departureDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=returnDate" })
  returnDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=service" })
  service?: string;
}


export class PriceOffersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class PriceOffersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PriceOffersPathParams;

  @Metadata()
  queryParams: PriceOffersQueryParams;

  @Metadata()
  security: PriceOffersSecurity;
}


export class PriceOffersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  priceOffers200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
