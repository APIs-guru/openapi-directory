import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnapshotImage
/** 
 * An image of a snapshot.
**/
export class SnapshotImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=mime_type" })
  mimeType?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
