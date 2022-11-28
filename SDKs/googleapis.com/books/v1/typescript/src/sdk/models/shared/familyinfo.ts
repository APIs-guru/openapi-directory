import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FamilyInfoMembership
/** 
 * Family membership info of the user that made the request.
**/
export class FamilyInfoMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acquirePermission" })
  acquirePermission?: string;

  @SpeakeasyMetadata({ data: "json, name=ageGroup" })
  ageGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=allowedMaturityRating" })
  allowedMaturityRating?: string;

  @SpeakeasyMetadata({ data: "json, name=isInFamily" })
  isInFamily?: boolean;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}


export class FamilyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=membership" })
  membership?: FamilyInfoMembership;
}
