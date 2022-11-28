import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FaresSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cabin-class" })
  cabinClass: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackingid" })
  trackingid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trip-duration" })
  tripDuration: string;
}


export class FaresSubscriptionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class FaresSubscriptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class FaresSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FaresSubscriptionsQueryParams;

  @SpeakeasyMetadata()
  headers: FaresSubscriptionsHeaders;

  @SpeakeasyMetadata()
  security: FaresSubscriptionsSecurity;
}


export class FaresSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  faresSubscriptions200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
