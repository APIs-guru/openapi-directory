import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConcurrentAccessRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceAllowed" })
  deviceAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=maxConcurrentDevices" })
  maxConcurrentDevices?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonCode" })
  reasonCode?: string;

  @SpeakeasyMetadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=timeWindowSeconds" })
  timeWindowSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
