import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NumberDetails extends SpeakeasyBase {
  @Metadata({ data: "form, name=country;" })
  country: string;

  @Metadata({ data: "form, name=msisdn;" })
  msisdn: string;

  @Metadata({ data: "form, name=target_api_key;" })
  targetApiKey?: string;
}
