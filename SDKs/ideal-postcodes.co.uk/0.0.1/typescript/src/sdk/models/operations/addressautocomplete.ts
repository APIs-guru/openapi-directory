import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddressAutocompleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=postcode_outward" })
  postcodeOutward?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class AddressAutocompleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class AddressAutocompleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AddressAutocompleteQueryParams;

  @SpeakeasyMetadata()
  security: AddressAutocompleteSecurity;
}


export class AddressAutocompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressAutocompleteResponseSchema?: shared.AddressAutocompleteResponseSchema;

  @SpeakeasyMetadata()
  addressLookupResponseSchema?: shared.AddressLookupResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
