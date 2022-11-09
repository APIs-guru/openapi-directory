import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirebaseAppInfo } from "./firebaseappinfo";


export class SearchFirebaseAppsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: shared.FirebaseAppInfo })
  apps?: FirebaseAppInfo[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
