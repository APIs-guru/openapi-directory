import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthConfirmIdentifierTypeEnum } from "./authconfirmidentifiertypeenum";


export class AuthConfirmIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: AuthConfirmIdentifierTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}
