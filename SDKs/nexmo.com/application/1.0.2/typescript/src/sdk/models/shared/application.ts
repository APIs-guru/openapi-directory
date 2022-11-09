import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Links } from "./links";
import { Keys } from "./keys";
import { Messages } from "./messages";
import { Voice } from "./voice";


export class Application extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: Links;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=keys" })
  keys?: Keys;

  @Metadata({ data: "json, name=messages" })
  messages: Messages;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=voice" })
  voice: Voice;
}
