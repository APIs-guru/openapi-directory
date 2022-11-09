import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsageRule } from "./usagerule";


// Usage
/** 
 * Configuration controlling usage of a service.
**/
export class Usage extends SpeakeasyBase {
  @Metadata({ data: "json, name=producerNotificationChannel" })
  producerNotificationChannel?: string;

  @Metadata({ data: "json, name=requirements" })
  requirements?: string[];

  @Metadata({ data: "json, name=rules", elemType: shared.UsageRule })
  rules?: UsageRule[];
}
