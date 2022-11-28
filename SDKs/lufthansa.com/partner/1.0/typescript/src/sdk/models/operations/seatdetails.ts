import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SeatDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aircraftCode" })
  aircraftCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cabinCode" })
  cabinCode: string;
}


export class SeatDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class SeatDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class SeatDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class SeatDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SeatDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: SeatDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: SeatDetailsHeaders;

  @SpeakeasyMetadata()
  security: SeatDetailsSecurity;
}


export class SeatDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seatDetails200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
