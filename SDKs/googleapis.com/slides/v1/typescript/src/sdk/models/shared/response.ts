import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// Response
/** 
 * A single response from an update.
**/
export class Response extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createImage" })
  createImage?: CreateImageResponse;

  @SpeakeasyMetadata({ data: "json, name=createLine" })
  createLine?: CreateLineResponse;

  @SpeakeasyMetadata({ data: "json, name=createShape" })
  createShape?: CreateShapeResponse;

  @SpeakeasyMetadata({ data: "json, name=createSheetsChart" })
  createSheetsChart?: CreateSheetsChartResponse;

  @SpeakeasyMetadata({ data: "json, name=createSlide" })
  createSlide?: CreateSlideResponse;

  @SpeakeasyMetadata({ data: "json, name=createTable" })
  createTable?: CreateTableResponse;

  @SpeakeasyMetadata({ data: "json, name=createVideo" })
  createVideo?: CreateVideoResponse;

  @SpeakeasyMetadata({ data: "json, name=duplicateObject" })
  duplicateObject?: DuplicateObjectResponse;

  @SpeakeasyMetadata({ data: "json, name=groupObjects" })
  groupObjects?: GroupObjectsResponse;

  @SpeakeasyMetadata({ data: "json, name=replaceAllShapesWithImage" })
  replaceAllShapesWithImage?: ReplaceAllShapesWithImageResponse;

  @SpeakeasyMetadata({ data: "json, name=replaceAllShapesWithSheetsChart" })
  replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartResponse;

  @SpeakeasyMetadata({ data: "json, name=replaceAllText" })
  replaceAllText?: ReplaceAllTextResponse;
}
