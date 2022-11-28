import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Peer
/** 
 * This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.
**/
export class Peer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: string;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
