import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Background } from "./background";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Size } from "./size";


// DocumentStyle
/** 
 * The style of the document.
**/
export class DocumentStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=background" })
  background?: Background;

  @Metadata({ data: "json, name=defaultFooterId" })
  defaultFooterId?: string;

  @Metadata({ data: "json, name=defaultHeaderId" })
  defaultHeaderId?: string;

  @Metadata({ data: "json, name=evenPageFooterId" })
  evenPageFooterId?: string;

  @Metadata({ data: "json, name=evenPageHeaderId" })
  evenPageHeaderId?: string;

  @Metadata({ data: "json, name=firstPageFooterId" })
  firstPageFooterId?: string;

  @Metadata({ data: "json, name=firstPageHeaderId" })
  firstPageHeaderId?: string;

  @Metadata({ data: "json, name=marginBottom" })
  marginBottom?: Dimension;

  @Metadata({ data: "json, name=marginFooter" })
  marginFooter?: Dimension;

  @Metadata({ data: "json, name=marginHeader" })
  marginHeader?: Dimension;

  @Metadata({ data: "json, name=marginLeft" })
  marginLeft?: Dimension;

  @Metadata({ data: "json, name=marginRight" })
  marginRight?: Dimension;

  @Metadata({ data: "json, name=marginTop" })
  marginTop?: Dimension;

  @Metadata({ data: "json, name=pageNumberStart" })
  pageNumberStart?: number;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: Size;

  @Metadata({ data: "json, name=useCustomHeaderFooterMargins" })
  useCustomHeaderFooterMargins?: boolean;

  @Metadata({ data: "json, name=useEvenPageHeaderFooter" })
  useEvenPageHeaderFooter?: boolean;

  @Metadata({ data: "json, name=useFirstPageHeaderFooter" })
  useFirstPageHeaderFooter?: boolean;
}
