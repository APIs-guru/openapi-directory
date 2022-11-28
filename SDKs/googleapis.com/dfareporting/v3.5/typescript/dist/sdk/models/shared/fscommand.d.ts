import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FsCommandPositionOptionEnum {
    Centered = "CENTERED",
    DistanceFromTopLeftCorner = "DISTANCE_FROM_TOP_LEFT_CORNER"
}
/**
 * FsCommand.
**/
export declare class FsCommand extends SpeakeasyBase {
    left?: number;
    positionOption?: FsCommandPositionOptionEnum;
    top?: number;
    windowHeight?: number;
    windowWidth?: number;
}
