import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalObjectReference } from "./localobjectreference";


// ConfigMapEnvSource
/** 
 * Not supported by Cloud Run ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
**/
export class ConfigMapEnvSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=localObjectReference" })
  localObjectReference?: LocalObjectReference;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=optional" })
  optional?: boolean;
}
