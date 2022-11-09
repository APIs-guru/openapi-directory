import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDefaultListingProviderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDefaultListingProviderRequest extends SpeakeasyBase {
  @Metadata()
  security: GetDefaultListingProviderSecurity;
}


export class GetDefaultListingProviderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listingsProviderInfo?: shared.ListingsProviderInfo;

  @Metadata()
  statusCode: number;
}
