import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Summary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ask" })
  ask?: number;

  @SpeakeasyMetadata({ data: "json, name=baseCurrency" })
  baseCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=bid" })
  bid?: number;

  @SpeakeasyMetadata({ data: "json, name=fiftyTwoWeekHigh" })
  fiftyTwoWeekHigh?: number;

  @SpeakeasyMetadata({ data: "json, name=fiftyTwoWeekLow" })
  fiftyTwoWeekLow?: number;

  @SpeakeasyMetadata({ data: "json, name=fiftyTwoWeekPercentChange" })
  fiftyTwoWeekPercentChange?: number;

  @SpeakeasyMetadata({ data: "json, name=fourWeekPercentChange" })
  fourWeekPercentChange?: number;

  @SpeakeasyMetadata({ data: "json, name=high" })
  high?: number;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: number;

  @SpeakeasyMetadata({ data: "json, name=low" })
  low?: number;

  @SpeakeasyMetadata({ data: "json, name=oneDayChange" })
  oneDayChange?: number;

  @SpeakeasyMetadata({ data: "json, name=oneDayPercentChange" })
  oneDayPercentChange?: number;

  @SpeakeasyMetadata({ data: "json, name=oneDayValue" })
  oneDayValue?: number;

  @SpeakeasyMetadata({ data: "json, name=open" })
  open?: number;

  @SpeakeasyMetadata({ data: "json, name=symbol" })
  symbol?: string;

  @SpeakeasyMetadata({ data: "json, name=timeStamp" })
  timeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=twelveWeekPercentChange" })
  twelveWeekPercentChange?: number;

  @SpeakeasyMetadata({ data: "json, name=yearToDatePercentChange" })
  yearToDatePercentChange?: number;
}
