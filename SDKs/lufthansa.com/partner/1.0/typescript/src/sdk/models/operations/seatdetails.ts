import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SeatDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=aircraftCode" })
  aircraftCode: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=cabinCode" })
  cabinCode: string;
}


export class SeatDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class SeatDetailsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class SeatDetailsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class SeatDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SeatDetailsPathParams;

  @Metadata()
  queryParams: SeatDetailsQueryParams;

  @Metadata()
  headers: SeatDetailsHeaders;

  @Metadata()
  security: SeatDetailsSecurity;
}


export class SeatDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  seatDetails200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
