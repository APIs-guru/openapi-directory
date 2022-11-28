import { SpeakeasyBase } from "../../../internal/utils";
import { CreateImageResponse } from "./createimageresponse";
import { CreateLineResponse } from "./createlineresponse";
import { CreateShapeResponse } from "./createshaperesponse";
import { CreateSheetsChartResponse } from "./createsheetschartresponse";
import { CreateSlideResponse } from "./createslideresponse";
import { CreateTableResponse } from "./createtableresponse";
import { CreateVideoResponse } from "./createvideoresponse";
import { DuplicateObjectResponse } from "./duplicateobjectresponse";
import { GroupObjectsResponse } from "./groupobjectsresponse";
import { ReplaceAllShapesWithImageResponse } from "./replaceallshapeswithimageresponse";
import { ReplaceAllShapesWithSheetsChartResponse } from "./replaceallshapeswithsheetschartresponse";
import { ReplaceAllTextResponse } from "./replacealltextresponse";
/**
 * A single response from an update.
**/
export declare class Response extends SpeakeasyBase {
    createImage?: CreateImageResponse;
    createLine?: CreateLineResponse;
    createShape?: CreateShapeResponse;
    createSheetsChart?: CreateSheetsChartResponse;
    createSlide?: CreateSlideResponse;
    createTable?: CreateTableResponse;
    createVideo?: CreateVideoResponse;
    duplicateObject?: DuplicateObjectResponse;
    groupObjects?: GroupObjectsResponse;
    replaceAllShapesWithImage?: ReplaceAllShapesWithImageResponse;
    replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartResponse;
    replaceAllText?: ReplaceAllTextResponse;
}
