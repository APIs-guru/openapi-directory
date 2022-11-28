import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaginationLinksFirst extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinksLast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinksPrev extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: PaginationLinksFirst;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: PaginationLinksLast;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next: PaginationLinksNext;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: PaginationLinksPrev;
}
