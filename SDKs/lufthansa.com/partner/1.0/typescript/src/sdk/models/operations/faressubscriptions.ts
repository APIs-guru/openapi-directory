import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FaresSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cabin-class" })
  cabinClass: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=destination" })
  destination: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trackingid" })
  trackingid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trip-duration" })
  tripDuration: string;
}


export class FaresSubscriptionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class FaresSubscriptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class FaresSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FaresSubscriptionsQueryParams;

  @Metadata()
  headers: FaresSubscriptionsHeaders;

  @Metadata()
  security: FaresSubscriptionsSecurity;
}


export class FaresSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  faresSubscriptions200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
