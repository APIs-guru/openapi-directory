import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelConnection
/** 
 * A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers create during the activation process to establish a connection between the provider and the subscriber channel.
**/
export class ChannelConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=activationToken" })
  activationToken?: string;

  @Metadata({ data: "json, name=channel" })
  channel?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
