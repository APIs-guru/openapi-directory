import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VersionFileStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    Expected = "EXPECTED"
,    Active = "ACTIVE"
}


// VersionFile
/** 
 * A static content file that is part of a version.
**/
export class VersionFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=status" })
  status?: VersionFileStatusEnum;
}
