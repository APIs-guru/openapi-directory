import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Summary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ask" })
  ask?: number;

  @Metadata({ data: "json, name=baseCurrency" })
  baseCurrency?: string;

  @Metadata({ data: "json, name=bid" })
  bid?: number;

  @Metadata({ data: "json, name=fiftyTwoWeekHigh" })
  fiftyTwoWeekHigh?: number;

  @Metadata({ data: "json, name=fiftyTwoWeekLow" })
  fiftyTwoWeekLow?: number;

  @Metadata({ data: "json, name=fiftyTwoWeekPercentChange" })
  fiftyTwoWeekPercentChange?: number;

  @Metadata({ data: "json, name=fourWeekPercentChange" })
  fourWeekPercentChange?: number;

  @Metadata({ data: "json, name=high" })
  high?: number;

  @Metadata({ data: "json, name=last" })
  last?: number;

  @Metadata({ data: "json, name=low" })
  low?: number;

  @Metadata({ data: "json, name=oneDayChange" })
  oneDayChange?: number;

  @Metadata({ data: "json, name=oneDayPercentChange" })
  oneDayPercentChange?: number;

  @Metadata({ data: "json, name=oneDayValue" })
  oneDayValue?: number;

  @Metadata({ data: "json, name=open" })
  open?: number;

  @Metadata({ data: "json, name=symbol" })
  symbol?: string;

  @Metadata({ data: "json, name=timeStamp" })
  timeStamp?: Date;

  @Metadata({ data: "json, name=twelveWeekPercentChange" })
  twelveWeekPercentChange?: number;

  @Metadata({ data: "json, name=yearToDatePercentChange" })
  yearToDatePercentChange?: number;
}
