import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegionProto
/** 
 * A rectangular region.
**/
export class RegionProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=heightPx" })
  heightPx?: number;

  @Metadata({ data: "json, name=leftPx" })
  leftPx?: number;

  @Metadata({ data: "json, name=topPx" })
  topPx?: number;

  @Metadata({ data: "json, name=widthPx" })
  widthPx?: number;
}
