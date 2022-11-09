import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode403SbsEnum } from "./messagecode403sbsenum";


export class TppMessage403Sbs extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: TppMessageCategoryEnum;

  @Metadata({ data: "json, name=code" })
  code: MessageCode403SbsEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
