import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode400PisEnum } from "./messagecode400pisenum";



export class TppMessage400Pis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: TppMessageCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode400PisEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
