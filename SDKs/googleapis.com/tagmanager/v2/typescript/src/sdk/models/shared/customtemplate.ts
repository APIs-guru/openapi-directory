import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GalleryReference } from "./galleryreference";



// CustomTemplate
/** 
 * Represents a Google Tag Manager Custom Template's contents.
**/
export class CustomTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=galleryReference" })
  galleryReference?: GalleryReference;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=templateData" })
  templateData?: string;

  @SpeakeasyMetadata({ data: "json, name=templateId" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId?: string;
}
