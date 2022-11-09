import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Organization } from "./organization";


// CustomApp
/** 
 * This resource represents a custom app.
**/
export class CustomApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=organizations", elemType: shared.Organization })
  organizations?: Organization[];

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
