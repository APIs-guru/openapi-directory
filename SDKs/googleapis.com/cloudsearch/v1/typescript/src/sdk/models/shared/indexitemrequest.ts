import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
import { IndexItemOptions } from "./indexitemoptions";
import { Item } from "./item";


export enum IndexItemRequestModeEnum {
    Unspecified = "UNSPECIFIED",
    Synchronous = "SYNCHRONOUS",
    Asynchronous = "ASYNCHRONOUS"
}


export class IndexItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorName" })
  connectorName?: string;

  @SpeakeasyMetadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @SpeakeasyMetadata({ data: "json, name=indexItemOptions" })
  indexItemOptions?: IndexItemOptions;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: Item;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: IndexItemRequestModeEnum;
}
