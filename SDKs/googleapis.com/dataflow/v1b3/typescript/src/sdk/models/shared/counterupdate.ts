import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=boolean" })
  boolean?: boolean;

  @Metadata({ data: "json, name=cumulative" })
  cumulative?: boolean;

  @Metadata({ data: "json, name=distribution" })
  distribution?: DistributionUpdate;

  @Metadata({ data: "json, name=floatingPoint" })
  floatingPoint?: number;

  @Metadata({ data: "json, name=floatingPointList" })
  floatingPointList?: FloatingPointList;

  @Metadata({ data: "json, name=floatingPointMean" })
  floatingPointMean?: FloatingPointMean;

  @Metadata({ data: "json, name=integer" })
  integer?: SplitInt64;

  @Metadata({ data: "json, name=integerGauge" })
  integerGauge?: IntegerGauge;

  @Metadata({ data: "json, name=integerList" })
  integerList?: IntegerList;

  @Metadata({ data: "json, name=integerMean" })
  integerMean?: IntegerMean;

  @Metadata({ data: "json, name=internal" })
  internal?: any;

  @Metadata({ data: "json, name=nameAndKind" })
  nameAndKind?: NameAndKind;

  @Metadata({ data: "json, name=shortId" })
  shortId?: string;

  @Metadata({ data: "json, name=stringList" })
  stringList?: StringList;

  @Metadata({ data: "json, name=structuredNameAndMetadata" })
  structuredNameAndMetadata?: CounterStructuredNameAndMetadata;
}
