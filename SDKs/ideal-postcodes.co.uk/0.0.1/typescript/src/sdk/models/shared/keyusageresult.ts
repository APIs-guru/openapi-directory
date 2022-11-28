import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyUsageDailyCountEpoch } from "./keyusagedailycountepoch";



export class KeyUsageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dailyCount", elemType: KeyUsageDailyCountEpoch })
  dailyCount?: KeyUsageDailyCountEpoch[];

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
