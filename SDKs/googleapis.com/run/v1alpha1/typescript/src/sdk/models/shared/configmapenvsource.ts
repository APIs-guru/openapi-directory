import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";



// ConfigMapEnvSource
/** 
 * Not supported by Cloud Run ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
**/
export class ConfigMapEnvSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localObjectReference" })
  localObjectReference?: LocalObjectReference;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optional" })
  optional?: boolean;
}
