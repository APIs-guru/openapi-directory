import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
