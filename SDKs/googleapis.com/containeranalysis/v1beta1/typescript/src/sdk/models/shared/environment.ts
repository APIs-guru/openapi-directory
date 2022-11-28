import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Environment
/** 
 * Defines an object for the environment field in in-toto links. The suggested fields are "variables", "filesystem", and "workdir".
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customValues" })
  customValues?: Map<string, string>;
}
