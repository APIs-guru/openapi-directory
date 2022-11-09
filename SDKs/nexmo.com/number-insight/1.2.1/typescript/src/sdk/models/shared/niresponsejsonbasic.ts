import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NiResponseJsonBasic extends SpeakeasyBase {
  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=country_code_iso3" })
  countryCodeIso3?: string;

  @Metadata({ data: "json, name=country_name" })
  countryName?: string;

  @Metadata({ data: "json, name=country_prefix" })
  countryPrefix?: string;

  @Metadata({ data: "json, name=international_format_number" })
  internationalFormatNumber?: string;

  @Metadata({ data: "json, name=national_format_number" })
  nationalFormatNumber?: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=status_message" })
  statusMessage?: string;
}
