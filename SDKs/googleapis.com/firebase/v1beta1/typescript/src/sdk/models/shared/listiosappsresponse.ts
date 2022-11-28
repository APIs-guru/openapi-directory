import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IosApp } from "./iosapp";



export class ListIosAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apps", elemType: IosApp })
  apps?: IosApp[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
