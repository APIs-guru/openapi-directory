import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirebaseProject } from "./firebaseproject";


export class ListFirebaseProjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=results", elemType: shared.FirebaseProject })
  results?: FirebaseProject[];
}
