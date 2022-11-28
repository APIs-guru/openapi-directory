import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnvironmentVariable
/** 
 * A key-value pair passed as an environment variable to the test.
**/
export class EnvironmentVariable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
