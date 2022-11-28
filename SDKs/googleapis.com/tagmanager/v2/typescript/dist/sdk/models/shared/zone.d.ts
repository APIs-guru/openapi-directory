import { SpeakeasyBase } from "../../../internal/utils";
import { ZoneBoundary } from "./zoneboundary";
import { ZoneChildContainer } from "./zonechildcontainer";
import { ZoneTypeRestriction } from "./zonetyperestriction";
/**
 * Represents a Google Tag Manager Zone's contents.
**/
export declare class Zone extends SpeakeasyBase {
    accountId?: string;
    boundary?: ZoneBoundary;
    childContainer?: ZoneChildContainer[];
    containerId?: string;
    fingerprint?: string;
    name?: string;
    notes?: string;
    path?: string;
    tagManagerUrl?: string;
    typeRestriction?: ZoneTypeRestriction;
    workspaceId?: string;
    zoneId?: string;
}
