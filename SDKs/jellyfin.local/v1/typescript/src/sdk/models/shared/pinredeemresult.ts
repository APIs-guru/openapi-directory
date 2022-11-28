import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PinRedeemResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UsersReset" })
  usersReset?: string[];
}
