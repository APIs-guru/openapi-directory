import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionBatchUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;
}
