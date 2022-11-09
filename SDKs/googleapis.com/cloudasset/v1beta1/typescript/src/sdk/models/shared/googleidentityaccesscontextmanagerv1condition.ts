import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleIdentityAccesscontextmanagerV1DevicePolicy } from "./googleidentityaccesscontextmanagerv1devicepolicy";


// GoogleIdentityAccesscontextmanagerV1Condition
/** 
 * A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction.
**/
export class GoogleIdentityAccesscontextmanagerV1Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy?: GoogleIdentityAccesscontextmanagerV1DevicePolicy;

  @Metadata({ data: "json, name=ipSubnetworks" })
  ipSubnetworks?: string[];

  @Metadata({ data: "json, name=members" })
  members?: string[];

  @Metadata({ data: "json, name=negate" })
  negate?: boolean;

  @Metadata({ data: "json, name=regions" })
  regions?: string[];

  @Metadata({ data: "json, name=requiredAccessLevels" })
  requiredAccessLevels?: string[];
}
