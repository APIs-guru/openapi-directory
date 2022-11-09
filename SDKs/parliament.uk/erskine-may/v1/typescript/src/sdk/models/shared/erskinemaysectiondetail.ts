import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErskineMayFootnote } from "./erskinemayfootnote";
import { ErskineMaySectionOverview } from "./erskinemaysectionoverview";


export class ErskineMaySectionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=chapterNumber" })
  chapterNumber?: number;

  @Metadata({ data: "json, name=chapterTitle" })
  chapterTitle?: string;

  @Metadata({ data: "json, name=contentHtml" })
  contentHtml?: string;

  @Metadata({ data: "json, name=footnotes", elemType: shared.ErskineMayFootnote })
  footnotes?: ErskineMayFootnote[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=parentSectionId" })
  parentSectionId?: number;

  @Metadata({ data: "json, name=parentSectionTitle" })
  parentSectionTitle?: string;

  @Metadata({ data: "json, name=partNumber" })
  partNumber?: number;

  @Metadata({ data: "json, name=partTitle" })
  partTitle?: string;

  @Metadata({ data: "json, name=subSections", elemType: shared.ErskineMaySectionOverview })
  subSections?: ErskineMaySectionOverview[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=titleChain" })
  titleChain?: string;
}
