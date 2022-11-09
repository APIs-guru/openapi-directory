import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IosApp } from "./iosapp";


export class ListIosAppsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: shared.IosApp })
  apps?: IosApp[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
