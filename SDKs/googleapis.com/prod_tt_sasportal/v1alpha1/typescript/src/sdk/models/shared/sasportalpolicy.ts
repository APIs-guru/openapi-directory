import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SasPortalAssignment } from "./sasportalassignment";


// SasPortalPolicy
/** 
 * Defines an access control policy to the resources.
**/
export class SasPortalPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignments", elemType: shared.SasPortalAssignment })
  assignments?: SasPortalAssignment[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;
}
