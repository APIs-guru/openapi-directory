import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnvironmentVariable
/** 
 * A key-value pair passed as an environment variable to the test.
**/
export class EnvironmentVariable extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
