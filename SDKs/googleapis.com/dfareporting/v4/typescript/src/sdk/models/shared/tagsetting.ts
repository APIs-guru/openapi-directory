import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TagSettingKeywordOptionEnum {
    PlaceholderWithListOfKeywords = "PLACEHOLDER_WITH_LIST_OF_KEYWORDS"
,    Ignore = "IGNORE"
,    GenerateSeparateTagForEachKeyword = "GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD"
}


// TagSetting
/** 
 * Tag Settings
**/
export class TagSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalKeyValues" })
  additionalKeyValues?: string;

  @Metadata({ data: "json, name=includeClickThroughUrls" })
  includeClickThroughUrls?: boolean;

  @Metadata({ data: "json, name=includeClickTracking" })
  includeClickTracking?: boolean;

  @Metadata({ data: "json, name=keywordOption" })
  keywordOption?: TagSettingKeywordOptionEnum;
}
