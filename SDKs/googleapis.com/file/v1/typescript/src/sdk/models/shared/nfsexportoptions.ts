import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NfsExportOptionsAccessModeEnum {
    AccessModeUnspecified = "ACCESS_MODE_UNSPECIFIED"
,    ReadOnly = "READ_ONLY"
,    ReadWrite = "READ_WRITE"
}

export enum NfsExportOptionsSquashModeEnum {
    SquashModeUnspecified = "SQUASH_MODE_UNSPECIFIED"
,    NoRootSquash = "NO_ROOT_SQUASH"
,    RootSquash = "ROOT_SQUASH"
}


// NfsExportOptions
/** 
 * NFS export options specifications.
**/
export class NfsExportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessMode" })
  accessMode?: NfsExportOptionsAccessModeEnum;

  @Metadata({ data: "json, name=anonGid" })
  anonGid?: string;

  @Metadata({ data: "json, name=anonUid" })
  anonUid?: string;

  @Metadata({ data: "json, name=ipRanges" })
  ipRanges?: string[];

  @Metadata({ data: "json, name=squashMode" })
  squashMode?: NfsExportOptionsSquashModeEnum;
}
