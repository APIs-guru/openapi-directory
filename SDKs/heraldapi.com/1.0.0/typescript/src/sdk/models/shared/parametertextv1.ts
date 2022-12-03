import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterTextV1
/** 
 * Object containing text for the parameter that you can render on a front-end.
**/
export class ParameterTextV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent_facing_text" })
  agentFacingText?: string;

  @SpeakeasyMetadata({ data: "json, name=applicant_facing_text" })
  applicantFacingText?: string;
}
