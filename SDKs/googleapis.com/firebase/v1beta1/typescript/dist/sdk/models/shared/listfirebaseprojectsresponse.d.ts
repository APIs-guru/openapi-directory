import { SpeakeasyBase } from "../../../internal/utils";
import { FirebaseProject } from "./firebaseproject";
export declare class ListFirebaseProjectsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    results?: FirebaseProject[];
}
