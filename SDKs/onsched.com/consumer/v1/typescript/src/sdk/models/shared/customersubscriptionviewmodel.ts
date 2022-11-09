import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomerSubscriptionViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=customerPlanId" })
  customerPlanId?: string;

  @Metadata({ data: "json, name=customerPlanName" })
  customerPlanName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=planStart" })
  planStart?: Date;

  @Metadata({ data: "json, name=trialPeriodEnd" })
  trialPeriodEnd?: Date;

  @Metadata({ data: "json, name=trialPeriodStart" })
  trialPeriodStart?: Date;
}
