import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NonCompliantFile } from "./noncompliantfile";


// ComplianceOccurrence
/** 
 * An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.
**/
export class ComplianceOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=nonComplianceReason" })
  nonComplianceReason?: string;

  @Metadata({ data: "json, name=nonCompliantFiles", elemType: shared.NonCompliantFile })
  nonCompliantFiles?: NonCompliantFile[];
}
