import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DebugOptions } from "./debugoptions";
import { IndexItemOptions } from "./indexitemoptions";
import { Item } from "./item";

export enum IndexItemRequestModeEnum {
    Unspecified = "UNSPECIFIED"
,    Synchronous = "SYNCHRONOUS"
,    Asynchronous = "ASYNCHRONOUS"
}


export class IndexItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorName" })
  connectorName?: string;

  @Metadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @Metadata({ data: "json, name=indexItemOptions" })
  indexItemOptions?: IndexItemOptions;

  @Metadata({ data: "json, name=item" })
  item?: Item;

  @Metadata({ data: "json, name=mode" })
  mode?: IndexItemRequestModeEnum;
}
