import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode401SbsEnum } from "./messagecode401sbsenum";



export class TppMessage401Sbs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: TppMessageCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: MessageCode401SbsEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
