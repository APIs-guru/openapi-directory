import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudSecuritycenterV1ExternalSystem
/** 
 * Representation of third party SIEM/SOAR fields within SCC.
**/
export class GoogleCloudSecuritycenterV1ExternalSystem extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignees" })
  assignees?: string[];

  @Metadata({ data: "json, name=externalSystemUpdateTime" })
  externalSystemUpdateTime?: string;

  @Metadata({ data: "json, name=externalUid" })
  externalUid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
