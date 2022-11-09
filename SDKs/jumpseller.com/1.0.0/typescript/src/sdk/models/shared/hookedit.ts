import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HookEditFields } from "./hookeditfields";


export class HookEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=hook" })
  hook?: HookEditFields;
}
