import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode403AisEnum } from "./messagecode403aisenum";



export class TppMessage403Ais extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: TppMessageCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode403AisEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
