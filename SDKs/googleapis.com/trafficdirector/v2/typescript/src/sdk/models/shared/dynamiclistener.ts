import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamicListenerState } from "./dynamiclistenerstate";
import { DynamicListenerState } from "./dynamiclistenerstate";
import { UpdateFailureState } from "./updatefailurestate";
import { DynamicListenerState } from "./dynamiclistenerstate";


// DynamicListener
/** 
 * Describes a dynamically loaded listener via the LDS API. [#next-free-field: 6]
**/
export class DynamicListener extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeState" })
  activeState?: DynamicListenerState;

  @Metadata({ data: "json, name=drainingState" })
  drainingState?: DynamicListenerState;

  @Metadata({ data: "json, name=errorState" })
  errorState?: UpdateFailureState;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=warmingState" })
  warmingState?: DynamicListenerState;
}
