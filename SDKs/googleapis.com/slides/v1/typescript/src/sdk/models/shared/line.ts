import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LineProperties } from "./lineproperties";

export enum LineLineCategoryEnum {
    LineCategoryUnspecified = "LINE_CATEGORY_UNSPECIFIED"
,    Straight = "STRAIGHT"
,    Bent = "BENT"
,    Curved = "CURVED"
}

export enum LineLineTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    StraightConnector1 = "STRAIGHT_CONNECTOR_1"
,    BentConnector2 = "BENT_CONNECTOR_2"
,    BentConnector3 = "BENT_CONNECTOR_3"
,    BentConnector4 = "BENT_CONNECTOR_4"
,    BentConnector5 = "BENT_CONNECTOR_5"
,    CurvedConnector2 = "CURVED_CONNECTOR_2"
,    CurvedConnector3 = "CURVED_CONNECTOR_3"
,    CurvedConnector4 = "CURVED_CONNECTOR_4"
,    CurvedConnector5 = "CURVED_CONNECTOR_5"
,    StraightLine = "STRAIGHT_LINE"
}


// Line
/** 
 * A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector.
**/
export class Line extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineCategory" })
  lineCategory?: LineLineCategoryEnum;

  @Metadata({ data: "json, name=lineProperties" })
  lineProperties?: LineProperties;

  @Metadata({ data: "json, name=lineType" })
  lineType?: LineLineTypeEnum;
}
