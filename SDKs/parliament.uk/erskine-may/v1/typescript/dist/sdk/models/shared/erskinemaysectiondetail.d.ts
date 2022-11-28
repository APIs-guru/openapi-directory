import { SpeakeasyBase } from "../../../internal/utils";
import { ErskineMayFootnote } from "./erskinemayfootnote";
import { ErskineMaySectionOverview } from "./erskinemaysectionoverview";
export declare class ErskineMaySectionDetail extends SpeakeasyBase {
    chapterNumber?: number;
    chapterTitle?: string;
    contentHtml?: string;
    footnotes?: ErskineMayFootnote[];
    id?: number;
    parentSectionId?: number;
    parentSectionTitle?: string;
    partNumber?: number;
    partTitle?: string;
    subSections?: ErskineMaySectionOverview[];
    title?: string;
    titleChain?: string;
}
