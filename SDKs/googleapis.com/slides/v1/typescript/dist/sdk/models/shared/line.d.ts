import { SpeakeasyBase } from "../../../internal/utils";
import { LineProperties } from "./lineproperties";
export declare enum LineLineCategoryEnum {
    LineCategoryUnspecified = "LINE_CATEGORY_UNSPECIFIED",
    Straight = "STRAIGHT",
    Bent = "BENT",
    Curved = "CURVED"
}
export declare enum LineLineTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    StraightConnector1 = "STRAIGHT_CONNECTOR_1",
    BentConnector2 = "BENT_CONNECTOR_2",
    BentConnector3 = "BENT_CONNECTOR_3",
    BentConnector4 = "BENT_CONNECTOR_4",
    BentConnector5 = "BENT_CONNECTOR_5",
    CurvedConnector2 = "CURVED_CONNECTOR_2",
    CurvedConnector3 = "CURVED_CONNECTOR_3",
    CurvedConnector4 = "CURVED_CONNECTOR_4",
    CurvedConnector5 = "CURVED_CONNECTOR_5",
    StraightLine = "STRAIGHT_LINE"
}
/**
 * A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector.
**/
export declare class Line extends SpeakeasyBase {
    lineCategory?: LineLineCategoryEnum;
    lineProperties?: LineProperties;
    lineType?: LineLineTypeEnum;
}
