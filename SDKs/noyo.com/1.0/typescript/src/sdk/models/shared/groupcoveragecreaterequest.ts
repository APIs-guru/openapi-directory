import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GroupCoverageCreateRequestLineOfCoverageEnum {
    Accident = "accident",
    Add = "add",
    Cancer = "cancer",
    CriticalIllness = "critical_illness",
    Dental = "dental",
    HospitalIndemnity = "hospital_indemnity",
    Life = "life",
    Ltd = "ltd",
    Medical = "medical",
    Std = "std",
    Vision = "vision"
}


export class GroupCoverageCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=existing_coverage" })
  existingCoverage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=line_of_coverage" })
  lineOfCoverage: GroupCoverageCreateRequestLineOfCoverageEnum;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=requested_effective_date" })
  requestedEffectiveDate: Date;
}
