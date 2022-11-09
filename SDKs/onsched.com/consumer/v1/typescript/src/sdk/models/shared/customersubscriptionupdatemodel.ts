import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomerSubscriptionUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerPlanId" })
  customerPlanId?: string;

  @Metadata({ data: "json, name=planStart" })
  planStart?: Date;

  @Metadata({ data: "json, name=trialPeriodEnd" })
  trialPeriodEnd?: Date;
}
