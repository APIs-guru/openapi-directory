import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CoverageParameterV1
/** 
 * Coverage parameters describe the nature of coverage in an insurance policy.
**/
export class CoverageParameterV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
