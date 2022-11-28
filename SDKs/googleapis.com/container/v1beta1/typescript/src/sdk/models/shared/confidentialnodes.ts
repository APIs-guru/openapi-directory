import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfidentialNodes
/** 
 * ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
**/
export class ConfidentialNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
