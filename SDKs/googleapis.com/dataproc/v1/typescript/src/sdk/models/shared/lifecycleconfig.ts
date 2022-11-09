import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LifecycleConfig
/** 
 * Specifies the cluster auto-delete schedule configuration.
**/
export class LifecycleConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoDeleteTime" })
  autoDeleteTime?: string;

  @Metadata({ data: "json, name=autoDeleteTtl" })
  autoDeleteTtl?: string;

  @Metadata({ data: "json, name=idleDeleteTtl" })
  idleDeleteTtl?: string;

  @Metadata({ data: "json, name=idleStartTime" })
  idleStartTime?: string;
}
