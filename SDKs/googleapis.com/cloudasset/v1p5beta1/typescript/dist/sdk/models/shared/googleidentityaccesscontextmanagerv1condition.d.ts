import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1DevicePolicy } from "./googleidentityaccesscontextmanagerv1devicepolicy";
/**
 * A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction.
**/
export declare class GoogleIdentityAccesscontextmanagerV1Condition extends SpeakeasyBase {
    devicePolicy?: GoogleIdentityAccesscontextmanagerV1DevicePolicy;
    ipSubnetworks?: string[];
    members?: string[];
    negate?: boolean;
    regions?: string[];
    requiredAccessLevels?: string[];
}
