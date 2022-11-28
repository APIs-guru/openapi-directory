import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";



// SecretEnvSource
/** 
 * Not supported by Cloud Run. SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
**/
export class SecretEnvSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localObjectReference" })
  localObjectReference?: LocalObjectReference;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optional" })
  optional?: boolean;
}
