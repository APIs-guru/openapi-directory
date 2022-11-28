import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegionProto
/** 
 * A rectangular region.
**/
export class RegionProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=heightPx" })
  heightPx?: number;

  @SpeakeasyMetadata({ data: "json, name=leftPx" })
  leftPx?: number;

  @SpeakeasyMetadata({ data: "json, name=topPx" })
  topPx?: number;

  @SpeakeasyMetadata({ data: "json, name=widthPx" })
  widthPx?: number;
}
