import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudSecuritycenterV1MuteConfig
/** 
 * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
**/
export class GoogleCloudSecuritycenterV1MuteConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=mostRecentEditor" })
  mostRecentEditor?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudSecuritycenterV1MuteConfigInput
/** 
 * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
**/
export class GoogleCloudSecuritycenterV1MuteConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
