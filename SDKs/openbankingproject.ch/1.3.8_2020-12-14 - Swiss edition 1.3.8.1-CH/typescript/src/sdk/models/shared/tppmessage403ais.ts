import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode403AisEnum } from "./messagecode403aisenum";


export class TppMessage403Ais extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: TppMessageCategoryEnum;

  @Metadata({ data: "json, name=code" })
  code: MessageCode403AisEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
