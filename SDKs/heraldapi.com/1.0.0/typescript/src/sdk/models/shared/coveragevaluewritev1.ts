import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CoverageValueWriteV1
/** 
 * Coverage values assign specific values to coverage parameters.
**/
export class CoverageValueWriteV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=child_coverage_values", elemType: CoverageValueWriteV1 })
  childCoverageValues?: CoverageValueWriteV1[];

  @SpeakeasyMetadata({ data: "json, name=coverage_parameter_id" })
  coverageParameterId: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: any;
}
