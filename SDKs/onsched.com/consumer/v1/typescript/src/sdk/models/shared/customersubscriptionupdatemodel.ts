import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomerSubscriptionUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerPlanId" })
  customerPlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=planStart" })
  planStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=trialPeriodEnd" })
  trialPeriodEnd?: Date;
}
