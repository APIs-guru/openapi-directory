import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RegisterEmailResponseProviderEnum {
    Email = "email"
}


export class RegisterEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_ids" })
  applicationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: RegisterEmailResponseProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
