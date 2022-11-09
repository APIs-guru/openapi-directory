import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PaginationLinksLast extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinksNext extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinksSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


// PaginationLinks
/** 
 * Container containing self, next and last page links.
**/
export class PaginationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: PaginationLinksLast;

  @Metadata({ data: "json, name=next" })
  next?: PaginationLinksNext;

  @Metadata({ data: "json, name=self" })
  self?: PaginationLinksSelf;
}
