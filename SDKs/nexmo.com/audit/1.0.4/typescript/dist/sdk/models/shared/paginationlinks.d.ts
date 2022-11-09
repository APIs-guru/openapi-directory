import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PaginationLinksLast extends SpeakeasyBase {
    href?: string;
}
export declare class PaginationLinksNext extends SpeakeasyBase {
    href?: string;
}
export declare class PaginationLinksSelf extends SpeakeasyBase {
    href?: string;
}
/**
 * Container containing self, next and last page links.
**/
export declare class PaginationLinks extends SpeakeasyBase {
    last?: PaginationLinksLast;
    next?: PaginationLinksNext;
    self?: PaginationLinksSelf;
}
