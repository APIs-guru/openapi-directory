import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}


// GoogleCloudRetailV2SearchRequestDynamicFacetSpec
/** 
 * The specifications of dynamically generated facets.
**/
export class GoogleCloudRetailV2SearchRequestDynamicFacetSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum;
}
