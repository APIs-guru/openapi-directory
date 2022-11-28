import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TopOndQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin?: string;
}


export class TopOndHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class TopOndSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class TopOndRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TopOndQueryParams;

  @SpeakeasyMetadata()
  headers: TopOndHeaders;

  @SpeakeasyMetadata()
  security: TopOndSecurity;
}


export class TopOndResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  topOnd200ApplicationJsonString?: string;
}
