import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PartnerError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: boolean;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
