import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StackTrace
/** 
 * A stacktrace.
**/
export class StackTrace extends SpeakeasyBase {
  @Metadata({ data: "json, name=exception" })
  exception?: string;
}
