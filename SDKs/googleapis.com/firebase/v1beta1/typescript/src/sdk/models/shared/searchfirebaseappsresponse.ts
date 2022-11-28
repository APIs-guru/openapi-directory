import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirebaseAppInfo } from "./firebaseappinfo";



export class SearchFirebaseAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps", elemType: FirebaseAppInfo })
  apps?: FirebaseAppInfo[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
