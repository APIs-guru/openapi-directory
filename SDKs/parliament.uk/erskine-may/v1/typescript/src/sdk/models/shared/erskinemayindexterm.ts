import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErskineMayIndexTerm } from "./erskinemayindexterm";
import { ErskineMayIndexTerm } from "./erskinemayindexterm";
import { ErskineMayParagraphSearchResult } from "./erskinemayparagraphsearchresult";
import { ErskineMayIndexTermSeeLink } from "./erskinemayindextermseelink";


export class ErskineMayIndexTerm extends SpeakeasyBase {
  @Metadata({ data: "json, name=childTerms", elemType: shared.ErskineMayIndexTerm })
  childTerms?: ErskineMayIndexTerm[];

  @Metadata({ data: "json, name=displayAs" })
  displayAs?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=parentTerm" })
  parentTerm?: ErskineMayIndexTerm;

  @Metadata({ data: "json, name=references", elemType: shared.ErskineMayParagraphSearchResult })
  references?: ErskineMayParagraphSearchResult[];

  @Metadata({ data: "json, name=seeLinks", elemType: shared.ErskineMayIndexTermSeeLink })
  seeLinks?: ErskineMayIndexTermSeeLink[];

  @Metadata({ data: "json, name=term" })
  term?: string;
}
