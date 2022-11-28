import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StandardResourceMetadata
/** 
 * The standard metadata of a cloud resource.
**/
export class StandardResourceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalAttributes" })
  additionalAttributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=assetType" })
  assetType?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
