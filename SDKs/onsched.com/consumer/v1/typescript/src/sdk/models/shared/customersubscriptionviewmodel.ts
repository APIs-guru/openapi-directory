import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomerSubscriptionViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerPlanId" })
  customerPlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerPlanName" })
  customerPlanName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=planStart" })
  planStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=trialPeriodEnd" })
  trialPeriodEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=trialPeriodStart" })
  trialPeriodStart?: Date;
}
