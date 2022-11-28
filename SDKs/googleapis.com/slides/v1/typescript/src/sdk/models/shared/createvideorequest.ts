import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageElementProperties } from "./pageelementproperties";


export enum CreateVideoRequestSourceEnum {
    SourceUnspecified = "SOURCE_UNSPECIFIED",
    Youtube = "YOUTUBE",
    Drive = "DRIVE"
}


// CreateVideoRequest
/** 
 * Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes.
**/
export class CreateVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elementProperties" })
  elementProperties?: PageElementProperties;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: CreateVideoRequestSourceEnum;
}
