import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalObjectReference } from "./localobjectreference";


// SecretEnvSource
/** 
 * Not supported by Cloud Run SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
**/
export class SecretEnvSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=localObjectReference" })
  localObjectReference?: LocalObjectReference;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=optional" })
  optional?: boolean;
}
