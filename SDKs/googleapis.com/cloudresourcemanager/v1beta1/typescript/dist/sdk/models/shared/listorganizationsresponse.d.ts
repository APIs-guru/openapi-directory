import { SpeakeasyBase } from "../../../internal/utils";
import { Organization } from "./organization";
/**
 * The response returned from the `ListOrganizations` method.
**/
export declare class ListOrganizationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    organizations?: Organization[];
}
