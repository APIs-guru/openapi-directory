import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GalleryReference
/** 
 * Represents the link between a custom template and an entry on the Community Template Gallery site.
**/
export class GalleryReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=isModified" })
  isModified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
