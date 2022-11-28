import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErskineMayParagraphSearchResult } from "./erskinemayparagraphsearchresult";
import { ErskineMayIndexTermSeeLink } from "./erskinemayindextermseelink";



export class ErskineMayIndexTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childTerms", elemType: ErskineMayIndexTerm })
  childTerms?: ErskineMayIndexTerm[];

  @SpeakeasyMetadata({ data: "json, name=displayAs" })
  displayAs?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=parentTerm" })
  parentTerm?: ErskineMayIndexTerm;

  @SpeakeasyMetadata({ data: "json, name=references", elemType: ErskineMayParagraphSearchResult })
  references?: ErskineMayParagraphSearchResult[];

  @SpeakeasyMetadata({ data: "json, name=seeLinks", elemType: ErskineMayIndexTermSeeLink })
  seeLinks?: ErskineMayIndexTermSeeLink[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;
}
