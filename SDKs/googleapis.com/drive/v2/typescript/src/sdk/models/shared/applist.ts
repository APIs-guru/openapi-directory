import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";



// AppList
/** 
 * A list of third-party applications which the user has installed or given access to Google Drive.
**/
export class AppList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultAppIds" })
  defaultAppIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: App })
  items?: App[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
