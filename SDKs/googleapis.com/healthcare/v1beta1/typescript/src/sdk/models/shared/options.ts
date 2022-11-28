import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageConfig } from "./imageconfig";


export enum OptionsPrimaryIdsEnum {
    PrimaryIdsOptionUnspecified = "PRIMARY_IDS_OPTION_UNSPECIFIED",
    Keep = "KEEP",
    Regen = "REGEN"
}


// Options
/** 
 * Specifies additional options to apply to the base profile.
**/
export class Options extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cleanDescriptors" })
  cleanDescriptors?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=cleanImage" })
  cleanImage?: ImageConfig;

  @SpeakeasyMetadata({ data: "json, name=primaryIds" })
  primaryIds?: OptionsPrimaryIdsEnum;
}
