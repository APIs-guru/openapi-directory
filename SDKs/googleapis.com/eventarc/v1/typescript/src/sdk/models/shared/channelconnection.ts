import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelConnectionInput
/** 
 * A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers create during the activation process to establish a connection between the provider and the subscriber channel.
**/
export class ChannelConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationToken" })
  activationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// ChannelConnection
/** 
 * A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers create during the activation process to establish a connection between the provider and the subscriber channel.
**/
export class ChannelConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationToken" })
  activationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
