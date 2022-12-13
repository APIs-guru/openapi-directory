import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GroupCoverageResultLineOfCoverageEnum {
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


export class GroupCoverageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=existing_coverage" })
  existingCoverage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=line_of_coverage" })
  lineOfCoverage: GroupCoverageResultLineOfCoverageEnum;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: number;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=requested_effective_date" })
  requestedEffectiveDate: Date;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
