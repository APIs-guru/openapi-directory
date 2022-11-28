import { SpeakeasyBase } from "../../../internal/utils";
import { Background } from "./background";
import { Dimension } from "./dimension";
import { Size } from "./size";
/**
 * The style of the document.
**/
export declare class DocumentStyle extends SpeakeasyBase {
    background?: Background;
    defaultFooterId?: string;
    defaultHeaderId?: string;
    evenPageFooterId?: string;
    evenPageHeaderId?: string;
    firstPageFooterId?: string;
    firstPageHeaderId?: string;
    marginBottom?: Dimension;
    marginFooter?: Dimension;
    marginHeader?: Dimension;
    marginLeft?: Dimension;
    marginRight?: Dimension;
    marginTop?: Dimension;
    pageNumberStart?: number;
    pageSize?: Size;
    useCustomHeaderFooterMargins?: boolean;
    useEvenPageHeaderFooter?: boolean;
    useFirstPageHeaderFooter?: boolean;
}
