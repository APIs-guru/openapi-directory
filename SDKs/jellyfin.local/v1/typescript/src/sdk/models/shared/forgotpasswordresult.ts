import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForgotPasswordActionEnum } from "./forgotpasswordactionenum";



export class ForgotPasswordResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: ForgotPasswordActionEnum;

  @SpeakeasyMetadata({ data: "json, name=PinExpirationDate" })
  pinExpirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=PinFile" })
  pinFile?: string;
}
