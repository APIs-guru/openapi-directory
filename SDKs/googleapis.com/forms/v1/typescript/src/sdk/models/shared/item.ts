import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageItem } from "./imageitem";
import { QuestionGroupItem } from "./questiongroupitem";
import { QuestionItem } from "./questionitem";
import { VideoItem } from "./videoitem";
import { ImageItemInput } from "./imageitem";
import { QuestionGroupItemInput } from "./questiongroupitem";
import { QuestionItemInput } from "./questionitem";



// Item
/** 
 * A single item of the form. `kind` defines which kind of item it is.
**/
export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=imageItem" })
  imageItem?: ImageItem;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=pageBreakItem" })
  pageBreakItem?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=questionGroupItem" })
  questionGroupItem?: QuestionGroupItem;

  @SpeakeasyMetadata({ data: "json, name=questionItem" })
  questionItem?: QuestionItem;

  @SpeakeasyMetadata({ data: "json, name=textItem" })
  textItem?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=videoItem" })
  videoItem?: VideoItem;
}


// ItemInput
/** 
 * A single item of the form. `kind` defines which kind of item it is.
**/
export class ItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=imageItem" })
  imageItem?: ImageItemInput;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=pageBreakItem" })
  pageBreakItem?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=questionGroupItem" })
  questionGroupItem?: QuestionGroupItemInput;

  @SpeakeasyMetadata({ data: "json, name=questionItem" })
  questionItem?: QuestionItemInput;

  @SpeakeasyMetadata({ data: "json, name=textItem" })
  textItem?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=videoItem" })
  videoItem?: VideoItem;
}
