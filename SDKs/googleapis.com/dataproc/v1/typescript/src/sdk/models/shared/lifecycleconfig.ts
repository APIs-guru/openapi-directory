import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LifecycleConfig
/** 
 * Specifies the cluster auto-delete schedule configuration.
**/
export class LifecycleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoDeleteTime" })
  autoDeleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=autoDeleteTtl" })
  autoDeleteTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=idleDeleteTtl" })
  idleDeleteTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=idleStartTime" })
  idleStartTime?: string;
}


// LifecycleConfigInput
/** 
 * Specifies the cluster auto-delete schedule configuration.
**/
export class LifecycleConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoDeleteTime" })
  autoDeleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=autoDeleteTtl" })
  autoDeleteTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=idleDeleteTtl" })
  idleDeleteTtl?: string;
}
