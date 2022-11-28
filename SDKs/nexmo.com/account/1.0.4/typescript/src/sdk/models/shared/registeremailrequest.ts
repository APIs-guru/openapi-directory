import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RegisterEmailRequestProviderEnum {
    Email = "email"
}


export class RegisterEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_ids" })
  applicationIds?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: RegisterEmailRequestProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
