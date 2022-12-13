import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupCoverageEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=existing_coverage" })
  existingCoverage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=requested_effective_date" })
  requestedEffectiveDate?: Date;
}
