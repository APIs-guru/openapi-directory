import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdvertisedId } from "./advertisedid";


// Observation
/** 
 * Represents one beacon observed once.
**/
export class Observation extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertisedId" })
  advertisedId?: AdvertisedId;

  @Metadata({ data: "json, name=telemetry" })
  telemetry?: string;

  @Metadata({ data: "json, name=timestampMs" })
  timestampMs?: string;
}
