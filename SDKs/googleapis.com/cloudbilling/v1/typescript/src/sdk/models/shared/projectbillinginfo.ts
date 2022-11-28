import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectBillingInfo
/** 
 * Encapsulation of billing information for a Google Cloud Console project. A project has at most one associated billing account at a time (but a billing account can be assigned to multiple projects).
**/
export class ProjectBillingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingAccountName" })
  billingAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=billingEnabled" })
  billingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
