import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgencyDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certified" })
  certified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=franchise_code" })
  franchiseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=national_producer_number" })
  nationalProducerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_id_number" })
  taxIdNumber?: string;
}
