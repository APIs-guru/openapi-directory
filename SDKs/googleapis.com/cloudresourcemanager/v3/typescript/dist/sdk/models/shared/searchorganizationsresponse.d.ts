import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Organization } from "./organization";
/**
 * The response returned from the `SearchOrganizations` method.
**/
export declare class SearchOrganizationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    organizations?: Organization[];
}
