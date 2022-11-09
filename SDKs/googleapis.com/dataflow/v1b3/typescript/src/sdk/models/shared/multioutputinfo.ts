import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MultiOutputInfo
/** 
 * Information about an output of a multi-output DoFn.
**/
export class MultiOutputInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
