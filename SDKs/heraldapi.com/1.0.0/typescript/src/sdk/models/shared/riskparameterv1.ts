import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RiskParameterV1
/** 
 * Risk parameters describe the risks associated with the applicant. Institutions use risk parameters to underwrite insurance policies.
**/
export class RiskParameterV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
