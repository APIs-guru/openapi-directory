import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddressAutocompleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=postcode_outward" })
  postcodeOutward?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class AddressAutocompleteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class AddressAutocompleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AddressAutocompleteQueryParams;

  @Metadata()
  security: AddressAutocompleteSecurity;
}


export class AddressAutocompleteResponse extends SpeakeasyBase {
  @Metadata()
  addressAutocompleteResponseSchema?: shared.AddressAutocompleteResponseSchema;

  @Metadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
