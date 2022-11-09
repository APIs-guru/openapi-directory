import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Folder } from "./folder";


// Resource
/** 
 * Information related to the Google Cloud resource that is associated with this finding.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=folders", elemType: shared.Folder })
  folders?: Folder[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentDisplayName" })
  parentDisplayName?: string;

  @Metadata({ data: "json, name=parentName" })
  parentName?: string;

  @Metadata({ data: "json, name=projectDisplayName" })
  projectDisplayName?: string;

  @Metadata({ data: "json, name=projectName" })
  projectName?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
