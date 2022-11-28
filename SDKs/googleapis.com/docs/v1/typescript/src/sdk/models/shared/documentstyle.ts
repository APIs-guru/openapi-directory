import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Background } from "./background";
import { Dimension } from "./dimension";
import { Size } from "./size";



// DocumentStyle
/** 
 * The style of the document.
**/
export class DocumentStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=background" })
  background?: Background;

  @SpeakeasyMetadata({ data: "json, name=defaultFooterId" })
  defaultFooterId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultHeaderId" })
  defaultHeaderId?: string;

  @SpeakeasyMetadata({ data: "json, name=evenPageFooterId" })
  evenPageFooterId?: string;

  @SpeakeasyMetadata({ data: "json, name=evenPageHeaderId" })
  evenPageHeaderId?: string;

  @SpeakeasyMetadata({ data: "json, name=firstPageFooterId" })
  firstPageFooterId?: string;

  @SpeakeasyMetadata({ data: "json, name=firstPageHeaderId" })
  firstPageHeaderId?: string;

  @SpeakeasyMetadata({ data: "json, name=marginBottom" })
  marginBottom?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=marginFooter" })
  marginFooter?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=marginHeader" })
  marginHeader?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=marginLeft" })
  marginLeft?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=marginRight" })
  marginRight?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=marginTop" })
  marginTop?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=pageNumberStart" })
  pageNumberStart?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: Size;

  @SpeakeasyMetadata({ data: "json, name=useCustomHeaderFooterMargins" })
  useCustomHeaderFooterMargins?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useEvenPageHeaderFooter" })
  useEvenPageHeaderFooter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useFirstPageHeaderFooter" })
  useFirstPageHeaderFooter?: boolean;
}
