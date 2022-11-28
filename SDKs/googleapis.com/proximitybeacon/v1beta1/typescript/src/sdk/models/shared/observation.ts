import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdvertisedId } from "./advertisedid";



// Observation
/** 
 * Represents one beacon observed once.
**/
export class Observation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertisedId" })
  advertisedId?: AdvertisedId;

  @SpeakeasyMetadata({ data: "json, name=telemetry" })
  telemetry?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampMs" })
  timestampMs?: string;
}
