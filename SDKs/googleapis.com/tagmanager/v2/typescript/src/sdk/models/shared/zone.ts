import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ZoneBoundary } from "./zoneboundary";
import { ZoneChildContainer } from "./zonechildcontainer";
import { ZoneTypeRestriction } from "./zonetyperestriction";


// Zone
/** 
 * Represents a Google Tag Manager Zone's contents.
**/
export class Zone extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=boundary" })
  boundary?: ZoneBoundary;

  @Metadata({ data: "json, name=childContainer", elemType: shared.ZoneChildContainer })
  childContainer?: ZoneChildContainer[];

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @Metadata({ data: "json, name=typeRestriction" })
  typeRestriction?: ZoneTypeRestriction;

  @Metadata({ data: "json, name=workspaceId" })
  workspaceId?: string;

  @Metadata({ data: "json, name=zoneId" })
  zoneId?: string;
}
