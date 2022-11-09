import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnvVariable
/** 
 * An environment variable to set for an action.
**/
export class EnvVariable extends SpeakeasyBase {
  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
