import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NumberDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=country;" })
  country: string;

  @SpeakeasyMetadata({ data: "form, name=msisdn;" })
  msisdn: string;

  @SpeakeasyMetadata({ data: "form, name=target_api_key;" })
  targetApiKey?: string;
}
