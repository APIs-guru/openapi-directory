import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}


// GoogleCloudRetailV2SearchRequestDynamicFacetSpec
/** 
 * The specifications of dynamically generated facets.
**/
export class GoogleCloudRetailV2SearchRequestDynamicFacetSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum;
}
