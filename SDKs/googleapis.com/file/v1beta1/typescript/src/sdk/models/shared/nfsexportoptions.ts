import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NfsExportOptionsAccessModeEnum {
    AccessModeUnspecified = "ACCESS_MODE_UNSPECIFIED",
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE"
}

export enum NfsExportOptionsSquashModeEnum {
    SquashModeUnspecified = "SQUASH_MODE_UNSPECIFIED",
    NoRootSquash = "NO_ROOT_SQUASH",
    RootSquash = "ROOT_SQUASH"
}


// NfsExportOptions
/** 
 * NFS export options specifications.
**/
export class NfsExportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessMode" })
  accessMode?: NfsExportOptionsAccessModeEnum;

  @SpeakeasyMetadata({ data: "json, name=anonGid" })
  anonGid?: string;

  @SpeakeasyMetadata({ data: "json, name=anonUid" })
  anonUid?: string;

  @SpeakeasyMetadata({ data: "json, name=ipRanges" })
  ipRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=squashMode" })
  squashMode?: NfsExportOptionsSquashModeEnum;
}
