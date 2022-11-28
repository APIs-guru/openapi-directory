import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode405PisEnum } from "./messagecode405pisenum";



export class TppMessage405Pis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: TppMessageCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode405PisEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
