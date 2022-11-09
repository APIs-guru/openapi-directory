import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IosApp } from "./iosapp";
export declare class ListIosAppsResponse extends SpeakeasyBase {
    apps?: IosApp[];
    nextPageToken?: string;
}
