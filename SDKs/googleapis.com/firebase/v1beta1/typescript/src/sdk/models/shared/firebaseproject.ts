import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefaultResources } from "./defaultresources";

export enum FirebaseProjectStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Deleted = "DELETED"
}


// FirebaseProject
/** 
 * A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets), and other Firebase and Google Cloud Platform (GCP) resources. You create a `FirebaseProject` by calling AddFirebase and specifying an *existing* [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). This adds Firebase resources to the existing GCP `Project`. Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs.
**/
export class FirebaseProject extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=projectNumber" })
  projectNumber?: string;

  @Metadata({ data: "json, name=resources" })
  resources?: DefaultResources;

  @Metadata({ data: "json, name=state" })
  state?: FirebaseProjectStateEnum;
}
