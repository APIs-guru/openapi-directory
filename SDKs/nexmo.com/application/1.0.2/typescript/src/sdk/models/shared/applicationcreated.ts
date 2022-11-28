import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { KeysWithPrivateKey } from "./keyswithprivatekey";
import { Messages } from "./messages";
import { Voice } from "./voice";



export class ApplicationCreated extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: KeysWithPrivateKey;

  @SpeakeasyMetadata({ data: "json, name=messages" })
  messages: Messages;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice: Voice;
}
