import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProtectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ozone" })
  ozone?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: number;
}


export class GetProtectionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-access-token" })
  xAccessToken: string;
}


export class GetProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProtectionQueryParams;

  @SpeakeasyMetadata()
  headers: GetProtectionHeaders;
}


export class GetProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protectionResult?: shared.ProtectionResult;
}
