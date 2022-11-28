import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Auto = "AUTO",
    Disabled = "DISABLED"
}


// GoogleCloudRetailV2SearchRequestPersonalizationSpec
/** 
 * The specification for personalization.
**/
export class GoogleCloudRetailV2SearchRequestPersonalizationSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum;
}
