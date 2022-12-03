import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FileMiniV1StatusEnum {
    Available = "available",
    Deleted = "deleted"
}

export enum FileMiniV1TypeEnum {
    QuoteSummary = "quote_summary",
    PolicySpecimen = "policy_specimen",
    CyberRiskAssement = "cyber_risk_assement",
    ApplicationSummary = "application_summary"
}


// FileMiniV1
/** 
 * A mini representation of a file, used when nested within another response.
**/
export class FileMiniV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FileMiniV1StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FileMiniV1TypeEnum;
}
