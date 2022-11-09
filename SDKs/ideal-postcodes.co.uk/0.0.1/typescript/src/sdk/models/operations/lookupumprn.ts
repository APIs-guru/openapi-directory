import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LookupUmprnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=umprn" })
  umprn: string;
}


export class LookupUmprnQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;
}


export class LookupUmprnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class LookupUmprnRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LookupUmprnPathParams;

  @Metadata()
  queryParams: LookupUmprnQueryParams;

  @Metadata()
  security: LookupUmprnSecurity;
}


export class LookupUmprnResponse extends SpeakeasyBase {
  @Metadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @Metadata()
  statusCode: number;
}
