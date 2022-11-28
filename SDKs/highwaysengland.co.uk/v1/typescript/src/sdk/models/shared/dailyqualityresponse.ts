import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Qualities } from "./qualities";



export class DailyQualityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Qualities", elemType: Qualities })
  qualities?: Qualities[];

  @SpeakeasyMetadata({ data: "json, name=row_count" })
  rowCount?: number;
}
