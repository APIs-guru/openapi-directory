import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=drCallBackUrl;" })
  drCallBackUrl?: string;

  @Metadata({ data: "form, name=moCallBackUrl;" })
  moCallBackUrl?: string;
}
