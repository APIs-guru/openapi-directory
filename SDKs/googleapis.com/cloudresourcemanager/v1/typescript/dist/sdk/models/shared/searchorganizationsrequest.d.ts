import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request sent to the `SearchOrganizations` method.
**/
export declare class SearchOrganizationsRequest extends SpeakeasyBase {
    filter?: string;
    pageSize?: number;
    pageToken?: string;
}
