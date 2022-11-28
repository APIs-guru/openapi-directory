import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicListenerState } from "./dynamiclistenerstate";
import { UpdateFailureState } from "./updatefailurestate";



// DynamicListener
/** 
 * Describes a dynamically loaded listener via the LDS API. [#next-free-field: 6]
**/
export class DynamicListener extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeState" })
  activeState?: DynamicListenerState;

  @SpeakeasyMetadata({ data: "json, name=drainingState" })
  drainingState?: DynamicListenerState;

  @SpeakeasyMetadata({ data: "json, name=errorState" })
  errorState?: UpdateFailureState;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=warmingState" })
  warmingState?: DynamicListenerState;
}
