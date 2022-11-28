import { SpeakeasyBase } from "../../../internal/utils";
import { Format } from "./format";
import { PresentationParams } from "./presentationparams";
import { RemixInfo } from "./remixinfo";
import { File } from "./file";
export declare enum AssetLicenseEnum {
    Unknown = "UNKNOWN",
    CreativeCommonsBy = "CREATIVE_COMMONS_BY",
    AllRightsReserved = "ALL_RIGHTS_RESERVED"
}
export declare enum AssetVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED",
    Private = "PRIVATE",
    Unlisted = "UNLISTED",
    Public = "PUBLIC"
}
/**
 * Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.
**/
export declare class Asset extends SpeakeasyBase {
    authorName?: string;
    createTime?: string;
    description?: string;
    displayName?: string;
    formats?: Format[];
    isCurated?: boolean;
    license?: AssetLicenseEnum;
    metadata?: string;
    name?: string;
    presentationParams?: PresentationParams;
    remixInfo?: RemixInfo;
    thumbnail?: File;
    updateTime?: string;
    visibility?: AssetVisibilityEnum;
}
