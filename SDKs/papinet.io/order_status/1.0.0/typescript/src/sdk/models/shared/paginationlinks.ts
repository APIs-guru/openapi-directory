import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PaginationLinksFirst extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinksLast extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinksNext extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinksPrev extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class PaginationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: PaginationLinksFirst;

  @Metadata({ data: "json, name=last" })
  last?: PaginationLinksLast;

  @Metadata({ data: "json, name=next" })
  next: PaginationLinksNext;

  @Metadata({ data: "json, name=prev" })
  prev?: PaginationLinksPrev;
}
