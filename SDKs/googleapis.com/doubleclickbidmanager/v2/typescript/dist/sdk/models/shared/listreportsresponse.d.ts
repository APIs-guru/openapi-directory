import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
export declare class ListReportsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    reports?: Report[];
}
