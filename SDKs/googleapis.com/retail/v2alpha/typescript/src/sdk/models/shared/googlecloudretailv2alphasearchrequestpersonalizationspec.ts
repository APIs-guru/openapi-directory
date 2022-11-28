import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Auto = "AUTO",
    Disabled = "DISABLED"
}


// GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec
/** 
 * The specification for personalization.
**/
export class GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum;
}
