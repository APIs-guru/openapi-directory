import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Interval } from "./interval";



export class IntervalCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseCurrency" })
  baseCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=intervals", elemType: Interval })
  intervals?: Interval[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=symbol" })
  symbol?: string;
}
