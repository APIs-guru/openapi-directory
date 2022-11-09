import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LiaSettings } from "./liasettings";


export class LiasettingsCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @Metadata({ data: "json, name=contactName" })
  contactName?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=gmbEmail" })
  gmbEmail?: string;

  @Metadata({ data: "json, name=liaSettings" })
  liaSettings?: LiaSettings;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=posDataProviderId" })
  posDataProviderId?: string;

  @Metadata({ data: "json, name=posExternalAccountId" })
  posExternalAccountId?: string;
}
