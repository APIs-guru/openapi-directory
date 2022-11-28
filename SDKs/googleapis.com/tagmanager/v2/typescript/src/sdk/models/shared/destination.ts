import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Destination
/** 
 * Represents a Google Tag Destination.
**/
export class Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationId" })
  destinationId?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationLinkId" })
  destinationLinkId?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;
}
