import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ZoneBoundary } from "./zoneboundary";
import { ZoneChildContainer } from "./zonechildcontainer";
import { ZoneTypeRestriction } from "./zonetyperestriction";



// Zone
/** 
 * Represents a Google Tag Manager Zone's contents.
**/
export class Zone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=boundary" })
  boundary?: ZoneBoundary;

  @SpeakeasyMetadata({ data: "json, name=childContainer", elemType: ZoneChildContainer })
  childContainer?: ZoneChildContainer[];

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=typeRestriction" })
  typeRestriction?: ZoneTypeRestriction;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=zoneId" })
  zoneId?: string;
}
