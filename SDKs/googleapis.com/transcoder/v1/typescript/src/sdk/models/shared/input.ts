import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreprocessingConfig } from "./preprocessingconfig";



// Input
/** 
 * Input asset.
**/
export class Input extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=preprocessingConfig" })
  preprocessingConfig?: PreprocessingConfig;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
