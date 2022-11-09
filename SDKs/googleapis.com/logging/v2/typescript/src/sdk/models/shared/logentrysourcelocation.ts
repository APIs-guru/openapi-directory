import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogEntrySourceLocation
/** 
 * Additional information about the source code location that produced the log entry.
**/
export class LogEntrySourceLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=file" })
  file?: string;

  @Metadata({ data: "json, name=function" })
  function?: string;

  @Metadata({ data: "json, name=line" })
  line?: string;
}
