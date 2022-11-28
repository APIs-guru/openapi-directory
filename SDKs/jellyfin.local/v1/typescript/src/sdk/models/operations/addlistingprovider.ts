import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddListingProviderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pw" })
  pw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateListings" })
  validateListings?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateLogin" })
  validateLogin?: boolean;
}


export class AddListingProviderRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  listingsProviderInfo?: shared.ListingsProviderInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  listingsProviderInfo1?: shared.ListingsProviderInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  listingsProviderInfo2?: shared.ListingsProviderInfo;
}


export class AddListingProviderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AddListingProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AddListingProviderQueryParams;

  @SpeakeasyMetadata()
  request?: AddListingProviderRequests;

  @SpeakeasyMetadata()
  security: AddListingProviderSecurity;
}


export class AddListingProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listingsProviderInfo?: shared.ListingsProviderInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
