import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}


// GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec
/** 
 * The specifications of dynamically generated facets.
**/
export class GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum;
}
