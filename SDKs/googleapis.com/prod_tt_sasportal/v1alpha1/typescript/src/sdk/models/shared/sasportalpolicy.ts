import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalAssignment } from "./sasportalassignment";



// SasPortalPolicy
/** 
 * Defines an access control policy to the resources.
**/
export class SasPortalPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignments", elemType: SasPortalAssignment })
  assignments?: SasPortalAssignment[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;
}
