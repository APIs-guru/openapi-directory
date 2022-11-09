import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Interval } from "./interval";


export class IntervalCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseCurrency" })
  baseCurrency?: string;

  @Metadata({ data: "json, name=intervals", elemType: shared.Interval })
  intervals?: Interval[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=symbol" })
  symbol?: string;
}
