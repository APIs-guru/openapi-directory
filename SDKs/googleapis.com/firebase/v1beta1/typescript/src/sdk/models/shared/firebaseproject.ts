import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultResources } from "./defaultresources";


export enum FirebaseProjectStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}


// FirebaseProject
/** 
 * A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets), and other Firebase and Google Cloud Platform (GCP) resources. You create a `FirebaseProject` by calling AddFirebase and specifying an *existing* [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). This adds Firebase resources to the existing GCP `Project`. Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs.
**/
export class FirebaseProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectNumber" })
  projectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: DefaultResources;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FirebaseProjectStateEnum;
}
