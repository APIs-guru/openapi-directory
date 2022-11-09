import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FamilyInfoMembership
/** 
 * Family membership info of the user that made the request.
**/
export class FamilyInfoMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=acquirePermission" })
  acquirePermission?: string;

  @Metadata({ data: "json, name=ageGroup" })
  ageGroup?: string;

  @Metadata({ data: "json, name=allowedMaturityRating" })
  allowedMaturityRating?: string;

  @Metadata({ data: "json, name=isInFamily" })
  isInFamily?: boolean;

  @Metadata({ data: "json, name=role" })
  role?: string;
}


export class FamilyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=membership" })
  membership?: FamilyInfoMembership;
}
