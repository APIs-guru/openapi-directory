import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PinRedeemResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Success" })
  success?: boolean;

  @Metadata({ data: "json, name=UsersReset" })
  usersReset?: string[];
}
