import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    Auto = "AUTO"
,    Disabled = "DISABLED"
}


// GoogleCloudRetailV2betaSearchRequestPersonalizationSpec
/** 
 * The specification for personalization.
**/
export class GoogleCloudRetailV2betaSearchRequestPersonalizationSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum;
}
