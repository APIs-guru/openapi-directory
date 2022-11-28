import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalAssignment } from "./sasportalassignment";
/**
 * Defines an access control policy to the resources.
**/
export declare class SasPortalPolicy extends SpeakeasyBase {
    assignments?: SasPortalAssignment[];
    etag?: string;
}
