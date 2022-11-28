import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionUpdate } from "./distributionupdate";
import { FloatingPointList } from "./floatingpointlist";
import { FloatingPointMean } from "./floatingpointmean";
import { SplitInt64 } from "./splitint64";
import { IntegerGauge } from "./integergauge";
import { IntegerList } from "./integerlist";
import { IntegerMean } from "./integermean";
import { NameAndKind } from "./nameandkind";
import { StringList } from "./stringlist";
import { CounterStructuredNameAndMetadata } from "./counterstructurednameandmetadata";



// CounterUpdate
/** 
 * An update to a Counter sent from a worker.
**/
export class CounterUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolean" })
  boolean?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cumulative" })
  cumulative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: DistributionUpdate;

  @SpeakeasyMetadata({ data: "json, name=floatingPoint" })
  floatingPoint?: number;

  @SpeakeasyMetadata({ data: "json, name=floatingPointList" })
  floatingPointList?: FloatingPointList;

  @SpeakeasyMetadata({ data: "json, name=floatingPointMean" })
  floatingPointMean?: FloatingPointMean;

  @SpeakeasyMetadata({ data: "json, name=integer" })
  integer?: SplitInt64;

  @SpeakeasyMetadata({ data: "json, name=integerGauge" })
  integerGauge?: IntegerGauge;

  @SpeakeasyMetadata({ data: "json, name=integerList" })
  integerList?: IntegerList;

  @SpeakeasyMetadata({ data: "json, name=integerMean" })
  integerMean?: IntegerMean;

  @SpeakeasyMetadata({ data: "json, name=internal" })
  internal?: any;

  @SpeakeasyMetadata({ data: "json, name=nameAndKind" })
  nameAndKind?: NameAndKind;

  @SpeakeasyMetadata({ data: "json, name=shortId" })
  shortId?: string;

  @SpeakeasyMetadata({ data: "json, name=stringList" })
  stringList?: StringList;

  @SpeakeasyMetadata({ data: "json, name=structuredNameAndMetadata" })
  structuredNameAndMetadata?: CounterStructuredNameAndMetadata;
}
