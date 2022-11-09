import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnvironmentVariable
/** 
 * EnvironmentVariable is a name-value pair to store environment variables for Process.
**/
export class EnvironmentVariable extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=val" })
  val?: string;
}
