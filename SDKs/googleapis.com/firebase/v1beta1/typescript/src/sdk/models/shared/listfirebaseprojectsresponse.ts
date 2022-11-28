import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirebaseProject } from "./firebaseproject";



export class ListFirebaseProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: FirebaseProject })
  results?: FirebaseProject[];
}
