import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";


export enum OsPolicyResourceFileResourceStateEnum {
    DesiredStateUnspecified = "DESIRED_STATE_UNSPECIFIED",
    Present = "PRESENT",
    Absent = "ABSENT",
    ContentsMatch = "CONTENTS_MATCH"
}


// OsPolicyResourceFileResource
/** 
 * A resource that manages the state of a file.
**/
export class OsPolicyResourceFileResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: OsPolicyResourceFile;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: OsPolicyResourceFileResourceStateEnum;
}
