import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SectionColumnProperties } from "./sectioncolumnproperties";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";

export enum SectionStyleColumnSeparatorStyleEnum {
    ColumnSeparatorStyleUnspecified = "COLUMN_SEPARATOR_STYLE_UNSPECIFIED"
,    None = "NONE"
,    BetweenEachColumn = "BETWEEN_EACH_COLUMN"
}

export enum SectionStyleContentDirectionEnum {
    ContentDirectionUnspecified = "CONTENT_DIRECTION_UNSPECIFIED"
,    LeftToRight = "LEFT_TO_RIGHT"
,    RightToLeft = "RIGHT_TO_LEFT"
}

export enum SectionStyleSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED"
,    Continuous = "CONTINUOUS"
,    NextPage = "NEXT_PAGE"
}


// SectionStyle
/** 
 * The styling that applies to a section.
**/
export class SectionStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnProperties", elemType: shared.SectionColumnProperties })
  columnProperties?: SectionColumnProperties[];

  @Metadata({ data: "json, name=columnSeparatorStyle" })
  columnSeparatorStyle?: SectionStyleColumnSeparatorStyleEnum;

  @Metadata({ data: "json, name=contentDirection" })
  contentDirection?: SectionStyleContentDirectionEnum;

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

  @Metadata({ data: "json, name=sectionType" })
  sectionType?: SectionStyleSectionTypeEnum;

  @Metadata({ data: "json, name=useFirstPageHeaderFooter" })
  useFirstPageHeaderFooter?: boolean;
}
