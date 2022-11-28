import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StackTrace
/** 
 * A stacktrace.
**/
export class StackTrace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exception" })
  exception?: string;
}
