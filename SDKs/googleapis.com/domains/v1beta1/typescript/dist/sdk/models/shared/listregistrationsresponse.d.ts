import { SpeakeasyBase } from "../../../internal/utils";
import { Registration } from "./registration";
/**
 * Response for the `ListRegistrations` method.
**/
export declare class ListRegistrationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    registrations?: Registration[];
}
