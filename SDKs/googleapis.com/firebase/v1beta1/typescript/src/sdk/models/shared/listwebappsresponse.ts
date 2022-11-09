import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebApp } from "./webapp";


export class ListWebAppsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: shared.WebApp })
  apps?: WebApp[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
