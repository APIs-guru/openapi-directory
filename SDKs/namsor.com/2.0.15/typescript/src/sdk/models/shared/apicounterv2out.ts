import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiKeyOut } from "./apikeyout";


// ApiCounterV2Out
/** 
 * Detailed usage as reported by the deduplicating API counter.
**/
export class ApiCounterV2Out extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: ApiKeyOut;

  @Metadata({ data: "json, name=apiService" })
  apiService?: string;

  @Metadata({ data: "json, name=createdDateTime" })
  createdDateTime?: number;

  @Metadata({ data: "json, name=lastFlushedDateTime" })
  lastFlushedDateTime?: number;

  @Metadata({ data: "json, name=lastUsedDateTime" })
  lastUsedDateTime?: number;

  @Metadata({ data: "json, name=serviceFeaturesUsage" })
  serviceFeaturesUsage?: Map<string, number>;

  @Metadata({ data: "json, name=totalUsage" })
  totalUsage?: number;
}
