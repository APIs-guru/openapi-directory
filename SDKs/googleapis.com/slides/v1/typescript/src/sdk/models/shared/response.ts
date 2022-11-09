import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=createImage" })
  createImage?: CreateImageResponse;

  @Metadata({ data: "json, name=createLine" })
  createLine?: CreateLineResponse;

  @Metadata({ data: "json, name=createShape" })
  createShape?: CreateShapeResponse;

  @Metadata({ data: "json, name=createSheetsChart" })
  createSheetsChart?: CreateSheetsChartResponse;

  @Metadata({ data: "json, name=createSlide" })
  createSlide?: CreateSlideResponse;

  @Metadata({ data: "json, name=createTable" })
  createTable?: CreateTableResponse;

  @Metadata({ data: "json, name=createVideo" })
  createVideo?: CreateVideoResponse;

  @Metadata({ data: "json, name=duplicateObject" })
  duplicateObject?: DuplicateObjectResponse;

  @Metadata({ data: "json, name=groupObjects" })
  groupObjects?: GroupObjectsResponse;

  @Metadata({ data: "json, name=replaceAllShapesWithImage" })
  replaceAllShapesWithImage?: ReplaceAllShapesWithImageResponse;

  @Metadata({ data: "json, name=replaceAllShapesWithSheetsChart" })
  replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartResponse;

  @Metadata({ data: "json, name=replaceAllText" })
  replaceAllText?: ReplaceAllTextResponse;
}
