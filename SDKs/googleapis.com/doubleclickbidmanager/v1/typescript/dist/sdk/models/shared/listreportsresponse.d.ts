import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Report } from "./report";
/**
 * List reports response.
**/
export declare class ListReportsResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    reports?: Report[];
}
