import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Organization } from "./organization";



// CustomApp
/** 
 * This resource represents a custom app.
**/
export class CustomApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=organizations", elemType: Organization })
  organizations?: Organization[];

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
