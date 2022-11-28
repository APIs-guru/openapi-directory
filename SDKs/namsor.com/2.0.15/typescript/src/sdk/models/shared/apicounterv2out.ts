import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiKeyOut } from "./apikeyout";



// ApiCounterV2Out
/** 
 * Detailed usage as reported by the deduplicating API counter.
**/
export class ApiCounterV2Out extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: ApiKeyOut;

  @SpeakeasyMetadata({ data: "json, name=apiService" })
  apiService?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDateTime" })
  createdDateTime?: number;

  @SpeakeasyMetadata({ data: "json, name=lastFlushedDateTime" })
  lastFlushedDateTime?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUsedDateTime" })
  lastUsedDateTime?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceFeaturesUsage" })
  serviceFeaturesUsage?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=totalUsage" })
  totalUsage?: number;
}
