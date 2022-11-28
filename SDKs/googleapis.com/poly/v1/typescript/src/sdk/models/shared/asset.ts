import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Format } from "./format";
import { PresentationParams } from "./presentationparams";
import { RemixInfo } from "./remixinfo";
import { File } from "./file";


export enum AssetLicenseEnum {
    Unknown = "UNKNOWN",
    CreativeCommonsBy = "CREATIVE_COMMONS_BY",
    AllRightsReserved = "ALL_RIGHTS_RESERVED"
}

export enum AssetVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED",
    Private = "PRIVATE",
    Unlisted = "UNLISTED",
    Public = "PUBLIC"
}


// Asset
/** 
 * Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.
**/
export class Asset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorName" })
  authorName?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=formats", elemType: Format })
  formats?: Format[];

  @SpeakeasyMetadata({ data: "json, name=isCurated" })
  isCurated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: AssetLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=presentationParams" })
  presentationParams?: PresentationParams;

  @SpeakeasyMetadata({ data: "json, name=remixInfo" })
  remixInfo?: RemixInfo;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: File;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: AssetVisibilityEnum;
}
