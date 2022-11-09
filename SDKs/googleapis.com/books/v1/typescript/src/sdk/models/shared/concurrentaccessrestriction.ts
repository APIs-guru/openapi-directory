import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConcurrentAccessRestriction extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceAllowed" })
  deviceAllowed?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=maxConcurrentDevices" })
  maxConcurrentDevices?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=nonce" })
  nonce?: string;

  @Metadata({ data: "json, name=reasonCode" })
  reasonCode?: string;

  @Metadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @Metadata({ data: "json, name=signature" })
  signature?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=timeWindowSeconds" })
  timeWindowSeconds?: number;

  @Metadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
