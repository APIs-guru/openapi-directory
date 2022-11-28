import { SpeakeasyBase } from "../../../internal/utils";
import { SectionColumnProperties } from "./sectioncolumnproperties";
import { Dimension } from "./dimension";
export declare enum SectionStyleColumnSeparatorStyleEnum {
    ColumnSeparatorStyleUnspecified = "COLUMN_SEPARATOR_STYLE_UNSPECIFIED",
    None = "NONE",
    BetweenEachColumn = "BETWEEN_EACH_COLUMN"
}
export declare enum SectionStyleContentDirectionEnum {
    ContentDirectionUnspecified = "CONTENT_DIRECTION_UNSPECIFIED",
    LeftToRight = "LEFT_TO_RIGHT",
    RightToLeft = "RIGHT_TO_LEFT"
}
export declare enum SectionStyleSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    Continuous = "CONTINUOUS",
    NextPage = "NEXT_PAGE"
}
/**
 * The styling that applies to a section.
**/
export declare class SectionStyle extends SpeakeasyBase {
    columnProperties?: SectionColumnProperties[];
    columnSeparatorStyle?: SectionStyleColumnSeparatorStyleEnum;
    contentDirection?: SectionStyleContentDirectionEnum;
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
    sectionType?: SectionStyleSectionTypeEnum;
    useFirstPageHeaderFooter?: boolean;
}
