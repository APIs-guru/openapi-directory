import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";



// CompanionSetting
/** 
 * Companion Settings
**/
export class CompanionSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companionsDisabled" })
  companionsDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabledSizes", elemType: Size })
  enabledSizes?: Size[];

  @SpeakeasyMetadata({ data: "json, name=imageOnly" })
  imageOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
