import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdrnToAddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=udprn" })
  udprn: string;
}


export class UpdrnToAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;
}


export class UpdrnToAddressSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class UpdrnToAddressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdrnToAddressPathParams;

  @Metadata()
  queryParams: UpdrnToAddressQueryParams;

  @Metadata()
  security: UpdrnToAddressSecurity;
}


export class UpdrnToAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @Metadata()
  statusCode: number;

  @Metadata()
  udprnToAddressResponseSchema?: shared.UdprnToAddressResponseSchema;
}
