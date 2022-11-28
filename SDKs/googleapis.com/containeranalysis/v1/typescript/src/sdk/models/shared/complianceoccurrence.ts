import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NonCompliantFile } from "./noncompliantfile";



// ComplianceOccurrence
/** 
 * An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.
**/
export class ComplianceOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nonComplianceReason" })
  nonComplianceReason?: string;

  @SpeakeasyMetadata({ data: "json, name=nonCompliantFiles", elemType: NonCompliantFile })
  nonCompliantFiles?: NonCompliantFile[];
}
