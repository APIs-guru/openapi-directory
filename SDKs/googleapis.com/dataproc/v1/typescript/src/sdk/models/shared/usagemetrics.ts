import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UsageMetrics
/** 
 * Usage metrics represent approximate total resources consumed by a workload.
**/
export class UsageMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=milliDcuSeconds" })
  milliDcuSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=shuffleStorageGbSeconds" })
  shuffleStorageGbSeconds?: string;
}
