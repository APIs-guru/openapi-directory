import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}


// GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec
/** 
 * The specifications of dynamically generated facets.
**/
export class GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum;
}
