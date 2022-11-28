import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnvVariable
/** 
 * An environment variable to set for an action.
**/
export class EnvVariable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
