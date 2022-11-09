import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudSecuritycenterV1MuteConfig
/** 
 * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
**/
export class GoogleCloudSecuritycenterV1MuteConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=mostRecentEditor" })
  mostRecentEditor?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
