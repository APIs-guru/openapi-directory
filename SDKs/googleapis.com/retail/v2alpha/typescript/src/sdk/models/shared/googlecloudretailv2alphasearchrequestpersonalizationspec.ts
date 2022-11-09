import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    Auto = "AUTO"
,    Disabled = "DISABLED"
}


// GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec
/** 
 * The specification for personalization.
**/
export class GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum;
}
