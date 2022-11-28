import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HookFields } from "./hookfields";



export class Hook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hook" })
  hook?: HookFields;
}
