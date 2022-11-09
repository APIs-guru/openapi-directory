import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectBillingInfo
/** 
 * Encapsulation of billing information for a Google Cloud Console project. A project has at most one associated billing account at a time (but a billing account can be assigned to multiple projects).
**/
export class ProjectBillingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingAccountName" })
  billingAccountName?: string;

  @Metadata({ data: "json, name=billingEnabled" })
  billingEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
