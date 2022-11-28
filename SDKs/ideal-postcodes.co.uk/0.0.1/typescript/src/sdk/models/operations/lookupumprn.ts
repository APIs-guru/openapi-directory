import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LookupUmprnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=umprn" })
  umprn: string;
}


export class LookupUmprnQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;
}


export class LookupUmprnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class LookupUmprnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LookupUmprnPathParams;

  @SpeakeasyMetadata()
  queryParams: LookupUmprnQueryParams;

  @SpeakeasyMetadata()
  security: LookupUmprnSecurity;
}


export class LookupUmprnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
