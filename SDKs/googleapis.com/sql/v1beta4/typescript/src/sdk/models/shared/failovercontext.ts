import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailoverContext
/** 
 * Database instance failover context.
**/
export class FailoverContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=settingsVersion" })
  settingsVersion?: string;
}
