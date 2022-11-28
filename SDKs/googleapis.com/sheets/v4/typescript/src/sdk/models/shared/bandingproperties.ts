import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";



// BandingProperties
/** 
 * Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set.
**/
export class BandingProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstBandColor" })
  firstBandColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=firstBandColorStyle" })
  firstBandColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=footerColor" })
  footerColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=footerColorStyle" })
  footerColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=headerColor" })
  headerColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=headerColorStyle" })
  headerColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=secondBandColor" })
  secondBandColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=secondBandColorStyle" })
  secondBandColorStyle?: ColorStyle;
}
