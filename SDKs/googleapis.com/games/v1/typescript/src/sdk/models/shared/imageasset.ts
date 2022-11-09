import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageAsset
/** 
 * An image asset object.
**/
export class ImageAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
