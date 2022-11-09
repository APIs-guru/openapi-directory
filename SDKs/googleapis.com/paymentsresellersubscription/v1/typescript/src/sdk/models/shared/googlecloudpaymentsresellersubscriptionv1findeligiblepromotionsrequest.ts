import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
