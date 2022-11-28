import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PriceOffersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;
}


export class PriceOffersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departureDate" })
  departureDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnDate" })
  returnDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service" })
  service?: string;
}


export class PriceOffersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class PriceOffersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PriceOffersPathParams;

  @SpeakeasyMetadata()
  queryParams: PriceOffersQueryParams;

  @SpeakeasyMetadata()
  security: PriceOffersSecurity;
}


export class PriceOffersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  priceOffers200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
