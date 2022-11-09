import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FirebaseAppInfo } from "./firebaseappinfo";
export declare class SearchFirebaseAppsResponse extends SpeakeasyBase {
    apps?: FirebaseAppInfo[];
    nextPageToken?: string;
}
