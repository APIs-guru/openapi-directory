import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageRule } from "./usagerule";



// Usage
/** 
 * Configuration controlling usage of a service.
**/
export class Usage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=producerNotificationChannel" })
  producerNotificationChannel?: string;

  @SpeakeasyMetadata({ data: "json, name=requirements" })
  requirements?: string[];

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UsageRule })
  rules?: UsageRule[];
}
