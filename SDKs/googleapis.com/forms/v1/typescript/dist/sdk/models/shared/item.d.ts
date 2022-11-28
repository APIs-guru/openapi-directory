import { SpeakeasyBase } from "../../../internal/utils";
import { ImageItem } from "./imageitem";
import { QuestionGroupItem } from "./questiongroupitem";
import { QuestionItem } from "./questionitem";
import { VideoItem } from "./videoitem";
import { ImageItemInput } from "./imageitem";
import { QuestionGroupItemInput } from "./questiongroupitem";
import { QuestionItemInput } from "./questionitem";
/**
 * A single item of the form. `kind` defines which kind of item it is.
**/
export declare class Item extends SpeakeasyBase {
    description?: string;
    imageItem?: ImageItem;
    itemId?: string;
    pageBreakItem?: Map<string, any>;
    questionGroupItem?: QuestionGroupItem;
    questionItem?: QuestionItem;
    textItem?: Map<string, any>;
    title?: string;
    videoItem?: VideoItem;
}
/**
 * A single item of the form. `kind` defines which kind of item it is.
**/
export declare class ItemInput extends SpeakeasyBase {
    description?: string;
    imageItem?: ImageItemInput;
    itemId?: string;
    pageBreakItem?: Map<string, any>;
    questionGroupItem?: QuestionGroupItemInput;
    questionItem?: QuestionItemInput;
    textItem?: Map<string, any>;
    title?: string;
    videoItem?: VideoItem;
}
