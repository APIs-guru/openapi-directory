import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ManifestTypeEnum {
    ManifestTypeUnspecified = "MANIFEST_TYPE_UNSPECIFIED"
,    Hls = "HLS"
,    Dash = "DASH"
}


// Manifest
/** 
 * Manifest configuration.
**/
export class Manifest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=muxStreams" })
  muxStreams?: string[];

  @Metadata({ data: "json, name=type" })
  type?: ManifestTypeEnum;
}
