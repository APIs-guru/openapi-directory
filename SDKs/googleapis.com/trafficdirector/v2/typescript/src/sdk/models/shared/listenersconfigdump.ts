import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DynamicListener } from "./dynamiclistener";
import { StaticListener } from "./staticlistener";


// ListenersConfigDump
/** 
 * Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.
**/
export class ListenersConfigDump extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicListeners", elemType: shared.DynamicListener })
  dynamicListeners?: DynamicListener[];

  @Metadata({ data: "json, name=staticListeners", elemType: shared.StaticListener })
  staticListeners?: StaticListener[];

  @Metadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
