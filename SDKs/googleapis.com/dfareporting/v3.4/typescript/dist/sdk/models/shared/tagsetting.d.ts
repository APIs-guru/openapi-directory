import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TagSettingKeywordOptionEnum {
    PlaceholderWithListOfKeywords = "PLACEHOLDER_WITH_LIST_OF_KEYWORDS",
    Ignore = "IGNORE",
    GenerateSeparateTagForEachKeyword = "GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD"
}
/**
 * Tag Settings
**/
export declare class TagSetting extends SpeakeasyBase {
    additionalKeyValues?: string;
    includeClickThroughUrls?: boolean;
    includeClickTracking?: boolean;
    keywordOption?: TagSettingKeywordOptionEnum;
}
