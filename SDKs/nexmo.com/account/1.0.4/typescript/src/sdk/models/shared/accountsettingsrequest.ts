import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=drCallBackUrl;" })
  drCallBackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=moCallBackUrl;" })
  moCallBackUrl?: string;
}
