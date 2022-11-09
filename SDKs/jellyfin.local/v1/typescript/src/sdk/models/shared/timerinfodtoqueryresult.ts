import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimerInfoDto } from "./timerinfodto";


export class TimerInfoDtoQueryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.TimerInfoDto })
  items?: TimerInfoDto[];

  @Metadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
