import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaCreateBundleRequest
/** 
 * PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Request to create a new Bundle.
**/
export class GoogleCloudIntegrationsV1alphaCreateBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=integrations" })
  integrations?: string[];

  @SpeakeasyMetadata({ data: "json, name=secondaryCustomerOrgId" })
  secondaryCustomerOrgId?: string;
}
