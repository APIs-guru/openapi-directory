import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).
**/
export declare class Link extends SpeakeasyBase {
    href?: string;
    hreflang?: string;
    media?: string;
    rel?: string;
    title?: string;
    type?: string;
    value?: string;
}
