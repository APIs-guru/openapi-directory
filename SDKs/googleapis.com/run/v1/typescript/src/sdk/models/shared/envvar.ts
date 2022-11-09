import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvVarSource } from "./envvarsource";


// EnvVar
/** 
 * EnvVar represents an environment variable present in a Container.
**/
export class EnvVar extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=valueFrom" })
  valueFrom?: EnvVarSource;
}
