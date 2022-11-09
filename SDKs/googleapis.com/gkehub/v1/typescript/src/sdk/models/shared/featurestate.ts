import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FeatureStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    Ok = "OK"
,    Warning = "WARNING"
,    Error = "ERROR"
}


// FeatureState
/** 
 * FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.
**/
export class FeatureState extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: FeatureStateCodeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
