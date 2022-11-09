import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ManifestTypeEnum {
    ManifestTypeUnspecified = "MANIFEST_TYPE_UNSPECIFIED",
    Hls = "HLS",
    Dash = "DASH"
}
/**
 * Manifest configuration.
**/
export declare class Manifest extends SpeakeasyBase {
    fileName?: string;
    muxStreams?: string[];
    type?: ManifestTypeEnum;
}
