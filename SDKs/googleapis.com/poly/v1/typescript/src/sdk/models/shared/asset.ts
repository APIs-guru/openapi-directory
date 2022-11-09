import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Format } from "./format";
import { PresentationParams } from "./presentationparams";
import { RemixInfo } from "./remixinfo";
import { File } from "./file";

export enum AssetLicenseEnum {
    Unknown = "UNKNOWN"
,    CreativeCommonsBy = "CREATIVE_COMMONS_BY"
,    AllRightsReserved = "ALL_RIGHTS_RESERVED"
}

export enum AssetVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED"
,    Private = "PRIVATE"
,    Unlisted = "UNLISTED"
,    Public = "PUBLIC"
}


// Asset
/** 
 * Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.
**/
export class Asset extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorName" })
  authorName?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=formats", elemType: shared.Format })
  formats?: Format[];

  @Metadata({ data: "json, name=isCurated" })
  isCurated?: boolean;

  @Metadata({ data: "json, name=license" })
  license?: AssetLicenseEnum;

  @Metadata({ data: "json, name=metadata" })
  metadata?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=presentationParams" })
  presentationParams?: PresentationParams;

  @Metadata({ data: "json, name=remixInfo" })
  remixInfo?: RemixInfo;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: File;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: AssetVisibilityEnum;
}
