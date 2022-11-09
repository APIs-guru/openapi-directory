import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddListingProviderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pw" })
  pw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=validateListings" })
  validateListings?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=validateLogin" })
  validateLogin?: boolean;
}


export class AddListingProviderRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  listingsProviderInfo?: shared.ListingsProviderInfo;

  @Metadata({ data: "request, media_type=application/json" })
  listingsProviderInfo1?: shared.ListingsProviderInfo;

  @Metadata({ data: "request, media_type=text/json" })
  listingsProviderInfo2?: shared.ListingsProviderInfo;
}


export class AddListingProviderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AddListingProviderRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AddListingProviderQueryParams;

  @Metadata()
  request?: AddListingProviderRequests;

  @Metadata()
  security: AddListingProviderSecurity;
}


export class AddListingProviderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listingsProviderInfo?: shared.ListingsProviderInfo;

  @Metadata()
  statusCode: number;
}
