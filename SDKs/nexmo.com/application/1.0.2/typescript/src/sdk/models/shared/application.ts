import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Keys } from "./keys";
import { Messages } from "./messages";
import { Voice } from "./voice";



export class Application extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: Keys;

  @SpeakeasyMetadata({ data: "json, name=messages" })
  messages: Messages;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice: Voice;
}
