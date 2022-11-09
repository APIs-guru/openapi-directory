import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GalleryReference } from "./galleryreference";


// CustomTemplate
/** 
 * Represents a Google Tag Manager Custom Template's contents.
**/
export class CustomTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=galleryReference" })
  galleryReference?: GalleryReference;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @Metadata({ data: "json, name=templateData" })
  templateData?: string;

  @Metadata({ data: "json, name=templateId" })
  templateId?: string;

  @Metadata({ data: "json, name=workspaceId" })
  workspaceId?: string;
}
