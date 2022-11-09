import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DebugOptions } from "./debugoptions";
import { PushItem } from "./pushitem";


export class PushItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorName" })
  connectorName?: string;

  @Metadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @Metadata({ data: "json, name=item" })
  item?: PushItem;
}
