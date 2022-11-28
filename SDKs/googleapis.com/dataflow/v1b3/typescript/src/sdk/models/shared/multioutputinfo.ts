import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MultiOutputInfo
/** 
 * Information about an output of a multi-output DoFn.
**/
export class MultiOutputInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
