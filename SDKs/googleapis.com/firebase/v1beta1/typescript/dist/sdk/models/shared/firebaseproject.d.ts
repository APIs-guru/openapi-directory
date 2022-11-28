import { SpeakeasyBase } from "../../../internal/utils";
import { DefaultResources } from "./defaultresources";
export declare enum FirebaseProjectStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}
/**
 * A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets), and other Firebase and Google Cloud Platform (GCP) resources. You create a `FirebaseProject` by calling AddFirebase and specifying an *existing* [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). This adds Firebase resources to the existing GCP `Project`. Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs.
**/
export declare class FirebaseProject extends SpeakeasyBase {
    annotations?: Map<string, string>;
    displayName?: string;
    etag?: string;
    name?: string;
    projectId?: string;
    projectNumber?: string;
    resources?: DefaultResources;
    state?: FirebaseProjectStateEnum;
}
