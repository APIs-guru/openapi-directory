import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FigiResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=compositeFIGI" })
  compositeFigi?: string;

  @Metadata({ data: "json, name=exchCode" })
  exchCode?: string;

  @Metadata({ data: "json, name=figi" })
  figi?: string;

  @Metadata({ data: "json, name=marketSector" })
  marketSector?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=securityDescription" })
  securityDescription?: string;

  @Metadata({ data: "json, name=securityType" })
  securityType?: string;

  @Metadata({ data: "json, name=securityType2" })
  securityType2?: string;

  @Metadata({ data: "json, name=shareClassFIGI" })
  shareClassFigi?: string;

  @Metadata({ data: "json, name=ticker" })
  ticker?: string;
}
