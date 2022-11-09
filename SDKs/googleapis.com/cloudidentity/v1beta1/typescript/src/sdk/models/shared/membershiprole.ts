import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExpiryDetail } from "./expirydetail";
import { RestrictionEvaluations } from "./restrictionevaluations";


// MembershipRole
/** 
 * A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
**/
export class MembershipRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiryDetail" })
  expiryDetail?: ExpiryDetail;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=restrictionEvaluations" })
  restrictionEvaluations?: RestrictionEvaluations;
}
