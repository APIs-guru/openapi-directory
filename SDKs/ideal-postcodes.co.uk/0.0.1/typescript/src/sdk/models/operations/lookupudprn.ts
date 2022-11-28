import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LookupUdprnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=udprn" })
  udprn: string;
}


export class LookupUdprnQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;
}


export class LookupUdprnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class LookupUdprnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LookupUdprnPathParams;

  @SpeakeasyMetadata()
  queryParams: LookupUdprnQueryParams;

  @SpeakeasyMetadata()
  security: LookupUdprnSecurity;
}


export class LookupUdprnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
