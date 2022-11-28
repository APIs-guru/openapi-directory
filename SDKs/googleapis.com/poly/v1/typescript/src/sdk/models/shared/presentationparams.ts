import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Quaternion } from "./quaternion";


export enum PresentationParamsColorSpaceEnum {
    Unknown = "UNKNOWN",
    Linear = "LINEAR",
    Gamma = "GAMMA"
}


// PresentationParams
/** 
 * Hints for displaying the asset, based on information available when the asset was uploaded.
**/
export class PresentationParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=colorSpace" })
  colorSpace?: PresentationParamsColorSpaceEnum;

  @SpeakeasyMetadata({ data: "json, name=orientingRotation" })
  orientingRotation?: Quaternion;
}
