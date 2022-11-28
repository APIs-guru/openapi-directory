import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SectionColumnProperties } from "./sectioncolumnproperties";
import { Dimension } from "./dimension";


export enum SectionStyleColumnSeparatorStyleEnum {
    ColumnSeparatorStyleUnspecified = "COLUMN_SEPARATOR_STYLE_UNSPECIFIED",
    None = "NONE",
    BetweenEachColumn = "BETWEEN_EACH_COLUMN"
}

export enum SectionStyleContentDirectionEnum {
    ContentDirectionUnspecified = "CONTENT_DIRECTION_UNSPECIFIED",
    LeftToRight = "LEFT_TO_RIGHT",
    RightToLeft = "RIGHT_TO_LEFT"
}

export enum SectionStyleSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    Continuous = "CONTINUOUS",
    NextPage = "NEXT_PAGE"
}


// SectionStyle
/** 
 * The styling that applies to a section.
**/
export class SectionStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnProperties", elemType: SectionColumnProperties })
  columnProperties?: SectionColumnProperties[];

  @SpeakeasyMetadata({ data: "json, name=columnSeparatorStyle" })
  columnSeparatorStyle?: SectionStyleColumnSeparatorStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=contentDirection" })
  contentDirection?: SectionStyleContentDirectionEnum;

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

  @SpeakeasyMetadata({ data: "json, name=sectionType" })
  sectionType?: SectionStyleSectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=useFirstPageHeaderFooter" })
  useFirstPageHeaderFooter?: boolean;
}
