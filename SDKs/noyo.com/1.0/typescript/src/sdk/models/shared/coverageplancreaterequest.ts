import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContributionDetails } from "./contributiondetails";
import { CoverageDetails } from "./coveragedetails";
import { RateModel } from "./ratemodel";



// CoveragePlanCreateRequestCobraRules
/** 
 * COBRA rules for the group medical plan
**/
export class CoveragePlanCreateRequestCobraRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eligible" })
  eligible?: boolean;
}


export class CoveragePlanCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benefit_details" })
  benefitDetails?: string[];

  @SpeakeasyMetadata({ data: "json, name=cobra_rules" })
  cobraRules?: CoveragePlanCreateRequestCobraRules;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=contribution_details", elemType: ContributionDetails })
  contributionDetails?: ContributionDetails[];

  @SpeakeasyMetadata({ data: "json, name=coverage_details" })
  coverageDetails?: CoverageDetails;

  @SpeakeasyMetadata({ data: "json, name=existing_plan" })
  existingPlan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_name" })
  planName: string;

  @SpeakeasyMetadata({ data: "json, name=plan_type" })
  planType?: string;

  @SpeakeasyMetadata({ data: "json, name=product_type" })
  productType?: string;

  @SpeakeasyMetadata({ data: "json, name=rate_details", elemType: RateModel })
  rateDetails?: RateModel[];

  @SpeakeasyMetadata({ data: "json, name=termination_policy" })
  terminationPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=volume_rules" })
  volumeRules?: string;

  @SpeakeasyMetadata({ data: "json, name=waiting_period_rules" })
  waitingPeriodRules?: string[];
}
