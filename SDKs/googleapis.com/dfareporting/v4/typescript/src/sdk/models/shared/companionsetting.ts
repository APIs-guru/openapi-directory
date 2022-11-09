import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Size } from "./size";


// CompanionSetting
/** 
 * Companion Settings
**/
export class CompanionSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=companionsDisabled" })
  companionsDisabled?: boolean;

  @Metadata({ data: "json, name=enabledSizes", elemType: shared.Size })
  enabledSizes?: Size[];

  @Metadata({ data: "json, name=imageOnly" })
  imageOnly?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
