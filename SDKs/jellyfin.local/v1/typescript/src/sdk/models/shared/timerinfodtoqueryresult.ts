import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimerInfoDto } from "./timerinfodto";



export class TimerInfoDtoQueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: TimerInfoDto })
  items?: TimerInfoDto[];

  @SpeakeasyMetadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
