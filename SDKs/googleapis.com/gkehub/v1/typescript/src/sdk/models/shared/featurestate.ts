import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FeatureStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Ok = "OK",
    Warning = "WARNING",
    Error = "ERROR"
}


// FeatureState
/** 
 * FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.
**/
export class FeatureState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: FeatureStateCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
