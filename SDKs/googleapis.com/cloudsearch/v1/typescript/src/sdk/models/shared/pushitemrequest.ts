import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
import { PushItem } from "./pushitem";



export class PushItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorName" })
  connectorName?: string;

  @SpeakeasyMetadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: PushItem;
}
