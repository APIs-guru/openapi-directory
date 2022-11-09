import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PaginationLinksFirst extends SpeakeasyBase {
    href?: string;
}
export declare class PaginationLinksLast extends SpeakeasyBase {
    href?: string;
}
export declare class PaginationLinksNext extends SpeakeasyBase {
    href?: string;
}
export declare class PaginationLinksPrev extends SpeakeasyBase {
    href?: string;
}
export declare class PaginationLinks extends SpeakeasyBase {
    first?: PaginationLinksFirst;
    last?: PaginationLinksLast;
    next: PaginationLinksNext;
    prev?: PaginationLinksPrev;
}
