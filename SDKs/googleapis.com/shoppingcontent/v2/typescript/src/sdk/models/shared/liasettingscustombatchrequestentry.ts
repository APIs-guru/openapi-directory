import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiaSettings } from "./liasettings";



export class LiasettingsCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=gmbEmail" })
  gmbEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=liaSettings" })
  liaSettings?: LiaSettings;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=posDataProviderId" })
  posDataProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=posExternalAccountId" })
  posExternalAccountId?: string;
}
