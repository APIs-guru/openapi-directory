import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ContributionDetailsContributionRuleTypeEnum {
    FixedDollar = "fixed_dollar",
    Percent = "percent"
}

export enum ContributionDetailsContributionSourceEnum {
    EmployeeAmount = "employee_amount",
    EmployerAmount = "employer_amount"
}

export enum ContributionDetailsContributionTargetEnum {
    Dependents = "dependents",
    Employee = "employee"
}


export class ContributionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contribution_rule" })
  contributionRule: string;

  @SpeakeasyMetadata({ data: "json, name=contribution_rule_type" })
  contributionRuleType: ContributionDetailsContributionRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=contribution_source" })
  contributionSource: ContributionDetailsContributionSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=contribution_target" })
  contributionTarget: ContributionDetailsContributionTargetEnum;
}
