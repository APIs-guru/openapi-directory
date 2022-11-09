import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StandardResourceMetadata
/** 
 * The standard metadata of a cloud resource.
**/
export class StandardResourceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalAttributes" })
  additionalAttributes?: string[];

  @Metadata({ data: "json, name=assetType" })
  assetType?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @Metadata({ data: "json, name=project" })
  project?: string;
}
