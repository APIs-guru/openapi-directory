import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PageElementProperties } from "./pageelementproperties";

export enum CreateVideoRequestSourceEnum {
    SourceUnspecified = "SOURCE_UNSPECIFIED"
,    Youtube = "YOUTUBE"
,    Drive = "DRIVE"
}


// CreateVideoRequest
/** 
 * Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes.
**/
export class CreateVideoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=elementProperties" })
  elementProperties?: PageElementProperties;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=source" })
  source?: CreateVideoRequestSourceEnum;
}
