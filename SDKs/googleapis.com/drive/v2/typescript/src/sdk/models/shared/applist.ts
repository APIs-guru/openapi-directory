import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { App } from "./app";


// AppList
/** 
 * A list of third-party applications which the user has installed or given access to Google Drive.
**/
export class AppList extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultAppIds" })
  defaultAppIds?: string[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.App })
  items?: App[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
