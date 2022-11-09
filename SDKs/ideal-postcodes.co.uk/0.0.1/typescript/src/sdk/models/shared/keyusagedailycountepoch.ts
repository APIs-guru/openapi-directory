import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyUsageDailyCountEpoch extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=date" })
  date?: string;
}
