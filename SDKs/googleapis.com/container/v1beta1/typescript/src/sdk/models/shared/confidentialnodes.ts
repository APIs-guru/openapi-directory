import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfidentialNodes
/** 
 * ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
**/
export class ConfidentialNodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
