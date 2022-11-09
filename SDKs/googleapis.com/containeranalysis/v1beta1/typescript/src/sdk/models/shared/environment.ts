import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Environment
/** 
 * Defines an object for the environment field in in-toto links. The suggested fields are "variables", "filesystem", and "workdir".
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=customValues" })
  customValues?: Map<string, string>;
}
