import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvVarSource } from "./envvarsource";



// EnvVar
/** 
 * EnvVar represents an environment variable present in a Container.
**/
export class EnvVar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=valueFrom" })
  valueFrom?: EnvVarSource;
}
