import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudSecuritycenterV1ExternalSystem
/** 
 * Representation of third party SIEM/SOAR fields within SCC.
**/
export class GoogleCloudSecuritycenterV1ExternalSystem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignees" })
  assignees?: string[];

  @SpeakeasyMetadata({ data: "json, name=externalSystemUpdateTime" })
  externalSystemUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=externalUid" })
  externalUid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
