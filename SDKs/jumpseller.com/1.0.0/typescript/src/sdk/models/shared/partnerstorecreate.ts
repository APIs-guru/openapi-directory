import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PartnerStoreCreatePlanNameEnum {
    Pro = "pro",
    Plus = "plus",
    Premium = "premium"
}


export class PartnerStoreCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aff" })
  aff?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_name" })
  planName?: PartnerStoreCreatePlanNameEnum;

  @SpeakeasyMetadata({ data: "json, name=reject_duplicates" })
  rejectDuplicates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=store_name" })
  storeName?: string;
}
