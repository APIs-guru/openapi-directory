import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageItem } from "./imageitem";
import { QuestionGroupItem } from "./questiongroupitem";
import { QuestionItem } from "./questionitem";
import { VideoItem } from "./videoitem";


// Item
/** 
 * A single item of the form. `kind` defines which kind of item it is.
**/
export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=imageItem" })
  imageItem?: ImageItem;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=pageBreakItem" })
  pageBreakItem?: Map<string, any>;

  @Metadata({ data: "json, name=questionGroupItem" })
  questionGroupItem?: QuestionGroupItem;

  @Metadata({ data: "json, name=questionItem" })
  questionItem?: QuestionItem;

  @Metadata({ data: "json, name=textItem" })
  textItem?: Map<string, any>;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=videoItem" })
  videoItem?: VideoItem;
}
