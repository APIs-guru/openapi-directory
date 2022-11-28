import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryListItemsIcons
/** 
 * Links to 16x16 and 32x32 icons representing the API.
**/
export class DirectoryListItemsIcons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x16" })
  x16?: string;

  @SpeakeasyMetadata({ data: "json, name=x32" })
  x32?: string;
}


export class DirectoryListItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discoveryLink" })
  discoveryLink?: string;

  @SpeakeasyMetadata({ data: "json, name=discoveryRestUrl" })
  discoveryRestUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=documentationLink" })
  documentationLink?: string;

  @SpeakeasyMetadata({ data: "json, name=icons" })
  icons?: DirectoryListItemsIcons;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred" })
  preferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class DirectoryList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discoveryVersion" })
  discoveryVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: DirectoryListItems })
  items?: DirectoryListItems[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
