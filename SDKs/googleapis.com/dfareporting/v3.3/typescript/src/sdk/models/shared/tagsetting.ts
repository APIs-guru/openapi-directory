import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TagSettingKeywordOptionEnum {
    PlaceholderWithListOfKeywords = "PLACEHOLDER_WITH_LIST_OF_KEYWORDS",
    Ignore = "IGNORE",
    GenerateSeparateTagForEachKeyword = "GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD"
}


// TagSetting
/** 
 * Tag Settings
**/
export class TagSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalKeyValues" })
  additionalKeyValues?: string;

  @SpeakeasyMetadata({ data: "json, name=includeClickThroughUrls" })
  includeClickThroughUrls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeClickTracking" })
  includeClickTracking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keywordOption" })
  keywordOption?: TagSettingKeywordOptionEnum;
}
