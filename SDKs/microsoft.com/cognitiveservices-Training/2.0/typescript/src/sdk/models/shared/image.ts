import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageRegion } from "./imageregion";
import { ImageTag } from "./imagetag";


// Image
/** 
 * Image model to be sent as JSON
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=regions", elemType: shared.ImageRegion })
  regions?: ImageRegion[];

  @Metadata({ data: "json, name=tags", elemType: shared.ImageTag })
  tags?: ImageTag[];

  @Metadata({ data: "json, name=thumbnailUri" })
  thumbnailUri?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
