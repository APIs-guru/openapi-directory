import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdrnToAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=udprn" })
  udprn: string;
}


export class UpdrnToAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;
}


export class UpdrnToAddressSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class UpdrnToAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdrnToAddressPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdrnToAddressQueryParams;

  @SpeakeasyMetadata()
  security: UpdrnToAddressSecurity;
}


export class UpdrnToAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  udprnToAddressResponseSchema?: shared.UdprnToAddressResponseSchema;
}
