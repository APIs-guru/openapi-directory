import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnvironmentVariable
/** 
 * EnvironmentVariable is a name-value pair to store environment variables for Process.
**/
export class EnvironmentVariable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=val" })
  val?: string;
}
