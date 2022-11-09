import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Quaternion } from "./quaternion";

export enum PresentationParamsColorSpaceEnum {
    Unknown = "UNKNOWN"
,    Linear = "LINEAR"
,    Gamma = "GAMMA"
}


// PresentationParams
/** 
 * Hints for displaying the asset, based on information available when the asset was uploaded.
**/
export class PresentationParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=colorSpace" })
  colorSpace?: PresentationParamsColorSpaceEnum;

  @Metadata({ data: "json, name=orientingRotation" })
  orientingRotation?: Quaternion;
}
