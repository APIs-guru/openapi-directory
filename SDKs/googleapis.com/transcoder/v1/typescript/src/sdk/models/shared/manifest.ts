import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ManifestTypeEnum {
    ManifestTypeUnspecified = "MANIFEST_TYPE_UNSPECIFIED",
    Hls = "HLS",
    Dash = "DASH"
}


// Manifest
/** 
 * Manifest configuration.
**/
export class Manifest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=muxStreams" })
  muxStreams?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ManifestTypeEnum;
}
