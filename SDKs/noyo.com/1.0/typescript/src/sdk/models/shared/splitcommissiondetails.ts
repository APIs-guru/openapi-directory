import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SplitCommissionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commission_arrangement" })
  commissionArrangement?: string;

  @SpeakeasyMetadata({ data: "json, name=line_of_coverage" })
  lineOfCoverage?: string;

  @SpeakeasyMetadata({ data: "json, name=percentage_of_commission" })
  percentageOfCommission: string;
}
