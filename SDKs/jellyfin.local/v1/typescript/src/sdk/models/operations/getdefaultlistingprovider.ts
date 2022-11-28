import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDefaultListingProviderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDefaultListingProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetDefaultListingProviderSecurity;
}


export class GetDefaultListingProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listingsProviderInfo?: shared.ListingsProviderInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
