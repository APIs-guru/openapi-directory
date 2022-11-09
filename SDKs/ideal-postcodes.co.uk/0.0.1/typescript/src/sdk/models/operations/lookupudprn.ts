import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LookupUdprnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=udprn" })
  udprn: string;
}


export class LookupUdprnQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;
}


export class LookupUdprnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class LookupUdprnRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LookupUdprnPathParams;

  @Metadata()
  queryParams: LookupUdprnQueryParams;

  @Metadata()
  security: LookupUdprnSecurity;
}


export class LookupUdprnResponse extends SpeakeasyBase {
  @Metadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @Metadata()
  statusCode: number;
}
