import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpiryDetail } from "./expirydetail";
import { RestrictionEvaluations } from "./restrictionevaluations";



// MembershipRole1
/** 
 * A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
**/
export class MembershipRole1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiryDetail" })
  expiryDetail?: ExpiryDetail;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictionEvaluations" })
  restrictionEvaluations?: RestrictionEvaluations;
}
