import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaginationLinksLast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


// PaginationLinks
/** 
 * Container containing self, next and last page links.
**/
export class PaginationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: PaginationLinksLast;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: PaginationLinksNext;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: PaginationLinksSelf;
}
