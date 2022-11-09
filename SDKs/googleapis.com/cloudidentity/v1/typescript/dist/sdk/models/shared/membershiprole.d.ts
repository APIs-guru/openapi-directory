import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExpiryDetail } from "./expirydetail";
import { RestrictionEvaluations } from "./restrictionevaluations";
/**
 * A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
**/
export declare class MembershipRole extends SpeakeasyBase {
    expiryDetail?: ExpiryDetail;
    name?: string;
    restrictionEvaluations?: RestrictionEvaluations;
}
