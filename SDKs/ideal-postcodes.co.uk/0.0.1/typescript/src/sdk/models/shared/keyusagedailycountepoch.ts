import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyUsageDailyCountEpoch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;
}
