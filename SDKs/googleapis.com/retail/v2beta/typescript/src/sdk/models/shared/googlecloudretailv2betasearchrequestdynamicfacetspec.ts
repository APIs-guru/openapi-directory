import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}


// GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec
/** 
 * The specifications of dynamically generated facets.
**/
export class GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum;
}
