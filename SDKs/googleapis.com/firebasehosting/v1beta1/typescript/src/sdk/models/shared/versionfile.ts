import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VersionFileStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Expected = "EXPECTED",
    Active = "ACTIVE"
}


// VersionFile
/** 
 * A static content file that is part of a version.
**/
export class VersionFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VersionFileStatusEnum;
}
