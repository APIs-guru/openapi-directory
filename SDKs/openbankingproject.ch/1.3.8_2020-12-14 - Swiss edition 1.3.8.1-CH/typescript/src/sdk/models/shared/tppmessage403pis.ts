import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode403PisEnum } from "./messagecode403pisenum";



export class TppMessage403Pis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: TppMessageCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode403PisEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
