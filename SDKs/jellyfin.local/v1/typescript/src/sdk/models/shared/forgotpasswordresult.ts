import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ForgotPasswordActionEnum } from "./forgotpasswordactionenum";


export class ForgotPasswordResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: ForgotPasswordActionEnum;

  @Metadata({ data: "json, name=PinExpirationDate" })
  pinExpirationDate?: Date;

  @Metadata({ data: "json, name=PinFile" })
  pinFile?: string;
}
