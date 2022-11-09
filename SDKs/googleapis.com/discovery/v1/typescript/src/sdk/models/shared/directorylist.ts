import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// DirectoryListItemsIcons
/** 
 * Links to 16x16 and 32x32 icons representing the API.
**/
export class DirectoryListItemsIcons extends SpeakeasyBase {
  @Metadata({ data: "json, name=x16" })
  x16?: string;

  @Metadata({ data: "json, name=x32" })
  x32?: string;
}


export class DirectoryListItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=discoveryLink" })
  discoveryLink?: string;

  @Metadata({ data: "json, name=discoveryRestUrl" })
  discoveryRestUrl?: string;

  @Metadata({ data: "json, name=documentationLink" })
  documentationLink?: string;

  @Metadata({ data: "json, name=icons" })
  icons?: DirectoryListItemsIcons;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=preferred" })
  preferred?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class DirectoryList extends SpeakeasyBase {
  @Metadata({ data: "json, name=discoveryVersion" })
  discoveryVersion?: string;

  @Metadata({ data: "json, name=items", elemType: shared.DirectoryListItems })
  items?: DirectoryListItems[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
