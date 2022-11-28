import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicListener } from "./dynamiclistener";
import { StaticListener } from "./staticlistener";
/**
 * Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.
**/
export declare class ListenersConfigDump extends SpeakeasyBase {
    dynamicListeners?: DynamicListener[];
    staticListeners?: StaticListener[];
    versionInfo?: string;
}
