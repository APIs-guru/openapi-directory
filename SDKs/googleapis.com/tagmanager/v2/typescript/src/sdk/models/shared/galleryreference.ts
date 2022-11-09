import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GalleryReference
/** 
 * Represents the link between a custom template and an entry on the Community Template Gallery site.
**/
export class GalleryReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=isModified" })
  isModified?: boolean;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
