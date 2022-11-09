import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PartnerStoreCreatePlanNameEnum {
    Pro = "pro"
,    Plus = "plus"
,    Premium = "premium"
}


export class PartnerStoreCreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=aff" })
  aff?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=plan_name" })
  planName?: PartnerStoreCreatePlanNameEnum;

  @Metadata({ data: "json, name=reject_duplicates" })
  rejectDuplicates?: boolean;

  @Metadata({ data: "json, name=store_name" })
  storeName?: string;
}
