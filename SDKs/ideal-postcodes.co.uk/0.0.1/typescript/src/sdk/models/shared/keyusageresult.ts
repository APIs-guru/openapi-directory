import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyUsageDailyCountEpoch } from "./keyusagedailycountepoch";


export class KeyUsageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=dailyCount", elemType: shared.KeyUsageDailyCountEpoch })
  dailyCount?: KeyUsageDailyCountEpoch[];

  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
