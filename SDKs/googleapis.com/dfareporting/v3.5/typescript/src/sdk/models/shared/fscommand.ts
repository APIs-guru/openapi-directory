import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FsCommandPositionOptionEnum {
    Centered = "CENTERED",
    DistanceFromTopLeftCorner = "DISTANCE_FROM_TOP_LEFT_CORNER"
}


// FsCommand
/** 
 * FsCommand.
**/
export class FsCommand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: number;

  @SpeakeasyMetadata({ data: "json, name=positionOption" })
  positionOption?: FsCommandPositionOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top?: number;

  @SpeakeasyMetadata({ data: "json, name=windowHeight" })
  windowHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=windowWidth" })
  windowWidth?: number;
}
