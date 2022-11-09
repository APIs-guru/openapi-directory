import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PreprocessingConfig } from "./preprocessingconfig";


// Input
/** 
 * Input asset.
**/
export class Input extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=preprocessingConfig" })
  preprocessingConfig?: PreprocessingConfig;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
