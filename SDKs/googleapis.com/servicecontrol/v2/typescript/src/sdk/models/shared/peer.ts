import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Peer
/** 
 * This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.
**/
export class Peer extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=principal" })
  principal?: string;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
