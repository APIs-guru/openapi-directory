import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode405SbsEnum } from "./messagecode405sbsenum";


export class TppMessage405Sbs extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: TppMessageCategoryEnum;

  @Metadata({ data: "json, name=code" })
  code: MessageCode405SbsEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
