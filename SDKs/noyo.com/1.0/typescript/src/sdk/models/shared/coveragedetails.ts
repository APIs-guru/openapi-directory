import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CoverageDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dependent_coverage" })
  dependentCoverage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=elected_official_coverage" })
  electedOfficialCoverage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=retiree_coverage" })
  retireeCoverage?: boolean;
}
