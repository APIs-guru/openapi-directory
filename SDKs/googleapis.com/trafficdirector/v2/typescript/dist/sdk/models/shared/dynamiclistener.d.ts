import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicListenerState } from "./dynamiclistenerstate";
import { UpdateFailureState } from "./updatefailurestate";
/**
 * Describes a dynamically loaded listener via the LDS API. [#next-free-field: 6]
**/
export declare class DynamicListener extends SpeakeasyBase {
    activeState?: DynamicListenerState;
    drainingState?: DynamicListenerState;
    errorState?: UpdateFailureState;
    name?: string;
    warmingState?: DynamicListenerState;
}
