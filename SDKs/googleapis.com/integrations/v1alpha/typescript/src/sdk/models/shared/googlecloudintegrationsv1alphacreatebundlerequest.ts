import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaCreateBundleRequest
/** 
 * PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Request to create a new Bundle.
**/
export class GoogleCloudIntegrationsV1alphaCreateBundleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=integrations" })
  integrations?: string[];

  @Metadata({ data: "json, name=secondaryCustomerOrgId" })
  secondaryCustomerOrgId?: string;
}
