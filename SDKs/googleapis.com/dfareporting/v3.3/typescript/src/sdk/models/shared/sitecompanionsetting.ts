import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Size } from "./size";


// SiteCompanionSetting
/** 
 * Companion Settings
**/
export class SiteCompanionSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=companionsDisabled" })
  companionsDisabled?: boolean;

  @Metadata({ data: "json, name=enabledSizes", elemType: shared.Size })
  enabledSizes?: Size[];

  @Metadata({ data: "json, name=imageOnly" })
  imageOnly?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
