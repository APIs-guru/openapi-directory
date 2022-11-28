import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Price extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
