import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HookEditFields } from "./hookeditfields";



export class HookEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hook" })
  hook?: HookEditFields;
}
