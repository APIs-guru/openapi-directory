import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidApp } from "./androidapp";



export class ListAndroidAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps", elemType: AndroidApp })
  apps?: AndroidApp[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
