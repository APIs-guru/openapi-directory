import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicListener } from "./dynamiclistener";
import { StaticListener } from "./staticlistener";



// ListenersConfigDump
/** 
 * Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.
**/
export class ListenersConfigDump extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicListeners", elemType: DynamicListener })
  dynamicListeners?: DynamicListener[];

  @SpeakeasyMetadata({ data: "json, name=staticListeners", elemType: StaticListener })
  staticListeners?: StaticListener[];

  @SpeakeasyMetadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
