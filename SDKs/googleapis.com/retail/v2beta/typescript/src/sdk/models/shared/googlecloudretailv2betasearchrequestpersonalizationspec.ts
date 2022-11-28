import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Auto = "AUTO",
    Disabled = "DISABLED"
}


// GoogleCloudRetailV2betaSearchRequestPersonalizationSpec
/** 
 * The specification for personalization.
**/
export class GoogleCloudRetailV2betaSearchRequestPersonalizationSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum;
}
