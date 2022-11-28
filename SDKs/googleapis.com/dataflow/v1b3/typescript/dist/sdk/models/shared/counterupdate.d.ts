import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * An update to a Counter sent from a worker.
**/
export declare class CounterUpdate extends SpeakeasyBase {
    boolean?: boolean;
    cumulative?: boolean;
    distribution?: DistributionUpdate;
    floatingPoint?: number;
    floatingPointList?: FloatingPointList;
    floatingPointMean?: FloatingPointMean;
    integer?: SplitInt64;
    integerGauge?: IntegerGauge;
    integerList?: IntegerList;
    integerMean?: IntegerMean;
    internal?: any;
    nameAndKind?: NameAndKind;
    shortId?: string;
    stringList?: StringList;
    structuredNameAndMetadata?: CounterStructuredNameAndMetadata;
}
