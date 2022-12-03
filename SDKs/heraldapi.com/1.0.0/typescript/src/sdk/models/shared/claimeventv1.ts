import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClaimEventV1
/** 
 * A claim event describes an event that either was a filed claim or would have warranted a claim if the customer had coverage at the time. `claim_event` can be the [`input_type`](https://www.heraldapi.com/docs/input-types) of a parameter on an [application](https://www.heraldapi.com/docs/application).  
**/
export class ClaimEventV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
