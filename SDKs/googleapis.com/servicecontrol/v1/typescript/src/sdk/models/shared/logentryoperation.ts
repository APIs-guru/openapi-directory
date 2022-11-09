import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogEntryOperation
/** 
 * Additional information about a potentially long-running operation with which a log entry is associated.
**/
export class LogEntryOperation extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last" })
  last?: boolean;

  @Metadata({ data: "json, name=producer" })
  producer?: string;
}
