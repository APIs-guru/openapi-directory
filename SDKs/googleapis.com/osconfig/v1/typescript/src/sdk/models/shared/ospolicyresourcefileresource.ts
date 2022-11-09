import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";

export enum OsPolicyResourceFileResourceStateEnum {
    DesiredStateUnspecified = "DESIRED_STATE_UNSPECIFIED"
,    Present = "PRESENT"
,    Absent = "ABSENT"
,    ContentsMatch = "CONTENTS_MATCH"
}


// OsPolicyResourceFileResource
/** 
 * A resource that manages the state of a file.
**/
export class OsPolicyResourceFileResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=file" })
  file?: OsPolicyResourceFile;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string;

  @Metadata({ data: "json, name=state" })
  state?: OsPolicyResourceFileResourceStateEnum;
}
