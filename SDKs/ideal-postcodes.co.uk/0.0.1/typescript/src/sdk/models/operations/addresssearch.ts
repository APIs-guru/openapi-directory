import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddressSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=postcode_outward" })
  postcodeOutward?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class AddressSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class AddressSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AddressSearchQueryParams;

  @Metadata()
  security: AddressSearchSecurity;
}


export class AddressSearchResponse extends SpeakeasyBase {
  @Metadata()
  addressSearchResponseSchema?: shared.AddressSearchResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @Metadata()
  statusCode: number;
}
