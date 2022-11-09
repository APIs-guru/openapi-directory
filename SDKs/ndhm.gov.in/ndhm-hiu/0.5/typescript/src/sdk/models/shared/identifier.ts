import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentifierTypeEnum } from "./identifiertypeenum";


export class Identifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: IdentifierTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
