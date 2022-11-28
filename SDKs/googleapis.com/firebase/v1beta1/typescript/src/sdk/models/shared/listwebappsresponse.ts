import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebApp } from "./webapp";



export class ListWebAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps", elemType: WebApp })
  apps?: WebApp[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
