import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AndroidApp } from "./androidapp";


export class ListAndroidAppsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: shared.AndroidApp })
  apps?: AndroidApp[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
