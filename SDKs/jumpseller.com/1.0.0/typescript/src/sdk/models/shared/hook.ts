import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HookFields } from "./hookfields";


export class Hook extends SpeakeasyBase {
  @Metadata({ data: "json, name=hook" })
  hook?: HookFields;
}
