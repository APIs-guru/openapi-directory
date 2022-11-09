import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FailoverContext
/** 
 * Database instance failover context.
**/
export class FailoverContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=settingsVersion" })
  settingsVersion?: string;
}
