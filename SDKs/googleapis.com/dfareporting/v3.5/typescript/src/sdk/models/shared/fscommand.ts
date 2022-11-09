import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FsCommandPositionOptionEnum {
    Centered = "CENTERED"
,    DistanceFromTopLeftCorner = "DISTANCE_FROM_TOP_LEFT_CORNER"
}


// FsCommand
/** 
 * FsCommand.
**/
export class FsCommand extends SpeakeasyBase {
  @Metadata({ data: "json, name=left" })
  left?: number;

  @Metadata({ data: "json, name=positionOption" })
  positionOption?: FsCommandPositionOptionEnum;

  @Metadata({ data: "json, name=top" })
  top?: number;

  @Metadata({ data: "json, name=windowHeight" })
  windowHeight?: number;

  @Metadata({ data: "json, name=windowWidth" })
  windowWidth?: number;
}
