import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Qualities } from "./qualities";


export class DailyQualityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Qualities", elemType: shared.Qualities })
  qualities?: Qualities[];

  @Metadata({ data: "json, name=row_count" })
  rowCount?: number;
}
