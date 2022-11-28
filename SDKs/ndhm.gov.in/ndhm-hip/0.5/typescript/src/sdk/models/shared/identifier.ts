import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentifierTypeEnum } from "./identifiertypeenum";



export class Identifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: IdentifierTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
