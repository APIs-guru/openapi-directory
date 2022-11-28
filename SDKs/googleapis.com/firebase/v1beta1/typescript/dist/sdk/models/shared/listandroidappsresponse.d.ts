import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidApp } from "./androidapp";
export declare class ListAndroidAppsResponse extends SpeakeasyBase {
    apps?: AndroidApp[];
    nextPageToken?: string;
}
