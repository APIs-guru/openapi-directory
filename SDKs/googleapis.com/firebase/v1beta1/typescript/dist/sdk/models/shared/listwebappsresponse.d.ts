import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WebApp } from "./webapp";
export declare class ListWebAppsResponse extends SpeakeasyBase {
    apps?: WebApp[];
    nextPageToken?: string;
}
