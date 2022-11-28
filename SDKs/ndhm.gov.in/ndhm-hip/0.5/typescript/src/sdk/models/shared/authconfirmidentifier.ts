import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthConfirmIdentifierTypeEnum } from "./authconfirmidentifiertypeenum";



export class AuthConfirmIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AuthConfirmIdentifierTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
