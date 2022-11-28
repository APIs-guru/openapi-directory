import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NiResponseJsonBasic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code_iso3" })
  countryCodeIso3?: string;

  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName?: string;

  @SpeakeasyMetadata({ data: "json, name=country_prefix" })
  countryPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=international_format_number" })
  internationalFormatNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=national_format_number" })
  nationalFormatNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=status_message" })
  statusMessage?: string;
}
