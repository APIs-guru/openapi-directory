import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogEntryOperation
/** 
 * Additional information about a potentially long-running operation with which a log entry is associated.
**/
export class LogEntryOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: boolean;

  @SpeakeasyMetadata({ data: "json, name=producer" })
  producer?: string;
}
