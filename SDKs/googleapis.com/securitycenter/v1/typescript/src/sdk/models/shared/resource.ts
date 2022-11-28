import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";



// Resource
/** 
 * Information related to the Google Cloud resource that is associated with this finding.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=folders", elemType: Folder })
  folders?: Folder[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentDisplayName" })
  parentDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=parentName" })
  parentName?: string;

  @SpeakeasyMetadata({ data: "json, name=projectDisplayName" })
  projectDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
