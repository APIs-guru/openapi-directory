import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProtectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ozone" })
  ozone?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: number;
}


export class GetProtectionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-access-token" })
  xAccessToken: string;
}


export class GetProtectionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetProtectionQueryParams;

  @Metadata()
  headers: GetProtectionHeaders;
}


export class GetProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protectionResult?: shared.ProtectionResult;
}
