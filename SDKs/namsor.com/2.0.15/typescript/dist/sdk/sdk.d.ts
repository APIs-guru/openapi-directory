import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://v2.namsor.com/NamSorAPIv2"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * anonymize - Activate/deactivate anonymization for a source.
    **/
    anonymize(req: operations.AnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.AnonymizeResponse>;
    /**
     * apiStatus - Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
    **/
    apiStatus(config?: AxiosRequestConfig): Promise<operations.ApiStatusResponse>;
    /**
     * apiUsage - Print current API usage.
    **/
    apiUsage(req: operations.ApiUsageRequest, config?: AxiosRequestConfig): Promise<operations.ApiUsageResponse>;
    /**
     * apiUsageHistory - Print historical API usage.
    **/
    apiUsageHistory(req: operations.ApiUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.ApiUsageHistoryResponse>;
    /**
     * apiUsageHistoryAggregate - Print historical API usage (in an aggregated view, by service, by day/hour/min).
    **/
    apiUsageHistoryAggregate(req: operations.ApiUsageHistoryAggregateRequest, config?: AxiosRequestConfig): Promise<operations.ApiUsageHistoryAggregateResponse>;
    /**
     * availableServices - List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
    **/
    availableServices(config?: AxiosRequestConfig): Promise<operations.AvailableServicesResponse>;
    /**
     * chineseNameCandidates - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
    **/
    chineseNameCandidates(req: operations.ChineseNameCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameCandidatesResponse>;
    /**
     * chineseNameCandidatesBatch - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
    **/
    chineseNameCandidatesBatch(req: operations.ChineseNameCandidatesBatchRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameCandidatesBatchResponse>;
    /**
     * chineseNameCandidatesGenderBatch - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
    **/
    chineseNameCandidatesGenderBatch(req: operations.ChineseNameCandidatesGenderBatchRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameCandidatesGenderBatchResponse>;
    /**
     * chineseNameGenderCandidates - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
    **/
    chineseNameGenderCandidates(req: operations.ChineseNameGenderCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameGenderCandidatesResponse>;
    /**
     * chineseNameMatch - Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
    **/
    chineseNameMatch(req: operations.ChineseNameMatchRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameMatchResponse>;
    /**
     * chineseNameMatchBatch - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
    **/
    chineseNameMatchBatch(req: operations.ChineseNameMatchBatchRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameMatchBatchResponse>;
    /**
     * corridor - [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
    **/
    corridor(req: operations.CorridorRequest, config?: AxiosRequestConfig): Promise<operations.CorridorResponse>;
    /**
     * corridorBatch - [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
    **/
    corridorBatch(req: operations.CorridorBatchRequest, config?: AxiosRequestConfig): Promise<operations.CorridorBatchResponse>;
    /**
     * country - [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
    **/
    country(req: operations.CountryRequest, config?: AxiosRequestConfig): Promise<operations.CountryResponse>;
    /**
     * countryBatch - [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
    **/
    countryBatch(req: operations.CountryBatchRequest, config?: AxiosRequestConfig): Promise<operations.CountryBatchResponse>;
    /**
     * diaspora - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
    **/
    diaspora(req: operations.DiasporaRequest, config?: AxiosRequestConfig): Promise<operations.DiasporaResponse>;
    /**
     * diasporaBatch - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
    **/
    diasporaBatch(req: operations.DiasporaBatchRequest, config?: AxiosRequestConfig): Promise<operations.DiasporaBatchResponse>;
    /**
     * disable - Activate/deactivate an API Key.
    **/
    disable(req: operations.DisableRequest, config?: AxiosRequestConfig): Promise<operations.DisableResponse>;
    /**
     * gender - Infer the likely gender of a name.
    **/
    gender(req: operations.GenderRequest, config?: AxiosRequestConfig): Promise<operations.GenderResponse>;
    /**
     * genderBatch - Infer the likely gender of up to 100 names, detecting automatically the cultural context.
    **/
    genderBatch(req: operations.GenderBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderBatchResponse>;
    /**
     * genderChineseName - Infer the likely gender of a Chinese full name ex. 王晓明
    **/
    genderChineseName(req: operations.GenderChineseNameRequest, config?: AxiosRequestConfig): Promise<operations.GenderChineseNameResponse>;
    /**
     * genderChineseNameBatch - Infer the likely gender of up to 100 full names ex. 王晓明
    **/
    genderChineseNameBatch(req: operations.GenderChineseNameBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderChineseNameBatchResponse>;
    /**
     * genderChineseNamePinyin - Infer the likely gender of a Chinese name in LATIN (Pinyin).
    **/
    genderChineseNamePinyin(req: operations.GenderChineseNamePinyinRequest, config?: AxiosRequestConfig): Promise<operations.GenderChineseNamePinyinResponse>;
    /**
     * genderChineseNamePinyinBatch - Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
    **/
    genderChineseNamePinyinBatch(req: operations.GenderChineseNamePinyinBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderChineseNamePinyinBatchResponse>;
    /**
     * genderFull - Infer the likely gender of a full name, ex. John H. Smith
    **/
    genderFull(req: operations.GenderFullRequest, config?: AxiosRequestConfig): Promise<operations.GenderFullResponse>;
    /**
     * genderFullBatch - Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
    **/
    genderFullBatch(req: operations.GenderFullBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderFullBatchResponse>;
    /**
     * genderFullGeo - Infer the likely gender of a full name, given a local context (ISO2 country code).
    **/
    genderFullGeo(req: operations.GenderFullGeoRequest, config?: AxiosRequestConfig): Promise<operations.GenderFullGeoResponse>;
    /**
     * genderFullGeoBatch - Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
    **/
    genderFullGeoBatch(req: operations.GenderFullGeoBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderFullGeoBatchResponse>;
    /**
     * genderGeo - Infer the likely gender of a name, given a local context (ISO2 country code).
    **/
    genderGeo(req: operations.GenderGeoRequest, config?: AxiosRequestConfig): Promise<operations.GenderGeoResponse>;
    /**
     * genderGeoBatch - Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
    **/
    genderGeoBatch(req: operations.GenderGeoBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderGeoBatchResponse>;
    /**
     * genderJapaneseNameFull - Infer the likely gender of a Japanese full name ex. 王晓明
    **/
    genderJapaneseNameFull(req: operations.GenderJapaneseNameFullRequest, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNameFullResponse>;
    /**
     * genderJapaneseNameFullBatch - Infer the likely gender of up to 100 full names
    **/
    genderJapaneseNameFullBatch(req: operations.GenderJapaneseNameFullBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNameFullBatchResponse>;
    /**
     * genderJapaneseNamePinyin - Infer the likely gender of a Japanese name in LATIN (Pinyin).
    **/
    genderJapaneseNamePinyin(req: operations.GenderJapaneseNamePinyinRequest, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNamePinyinResponse>;
    /**
     * genderJapaneseNamePinyinBatch - Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
    **/
    genderJapaneseNamePinyinBatch(req: operations.GenderJapaneseNamePinyinBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNamePinyinBatchResponse>;
    /**
     * japaneseNameGenderKanjiCandidatesBatch - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
    **/
    japaneseNameGenderKanjiCandidatesBatch(req: operations.JapaneseNameGenderKanjiCandidatesBatchRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameGenderKanjiCandidatesBatchResponse>;
    /**
     * japaneseNameKanjiCandidates - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
    **/
    japaneseNameKanjiCandidates(req: operations.JapaneseNameKanjiCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameKanjiCandidatesResponse>;
    /**
     * japaneseNameKanjiCandidatesBatch - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
    **/
    japaneseNameKanjiCandidatesBatch(req: operations.JapaneseNameKanjiCandidatesBatchRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameKanjiCandidatesBatchResponse>;
    /**
     * japaneseNameKanjiCandidates1 - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
    **/
    japaneseNameKanjiCandidates1(req: operations.JapaneseNameKanjiCandidates1Request, config?: AxiosRequestConfig): Promise<operations.JapaneseNameKanjiCandidates1Response>;
    /**
     * japaneseNameLatinCandidates - Romanize japanese name, based on the name in Kanji.
    **/
    japaneseNameLatinCandidates(req: operations.JapaneseNameLatinCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameLatinCandidatesResponse>;
    /**
     * japaneseNameLatinCandidatesBatch - Romanize japanese names, based on the name in KANJI
    **/
    japaneseNameLatinCandidatesBatch(req: operations.JapaneseNameLatinCandidatesBatchRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameLatinCandidatesBatchResponse>;
    /**
     * japaneseNameMatch - Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
    **/
    japaneseNameMatch(req: operations.JapaneseNameMatchRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameMatchResponse>;
    /**
     * japaneseNameMatchBatch - Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
    **/
    japaneseNameMatchBatch(req: operations.JapaneseNameMatchBatchRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameMatchBatchResponse>;
    /**
     * japaneseNameMatchFeedbackLoop - [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
    **/
    japaneseNameMatchFeedbackLoop(req: operations.JapaneseNameMatchFeedbackLoopRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameMatchFeedbackLoopResponse>;
    /**
     * learnable - Activate/deactivate learning from a source.
    **/
    learnable(req: operations.LearnableRequest, config?: AxiosRequestConfig): Promise<operations.LearnableResponse>;
    /**
     * nameType - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
    **/
    nameType(req: operations.NameTypeRequest, config?: AxiosRequestConfig): Promise<operations.NameTypeResponse>;
    /**
     * nameTypeBatch - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
    **/
    nameTypeBatch(req: operations.NameTypeBatchRequest, config?: AxiosRequestConfig): Promise<operations.NameTypeBatchResponse>;
    /**
     * nameTypeGeo - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
    **/
    nameTypeGeo(req: operations.NameTypeGeoRequest, config?: AxiosRequestConfig): Promise<operations.NameTypeGeoResponse>;
    /**
     * nameTypeGeoBatch - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
    **/
    nameTypeGeoBatch(req: operations.NameTypeGeoBatchRequest, config?: AxiosRequestConfig): Promise<operations.NameTypeGeoBatchResponse>;
    /**
     * origin - [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
    **/
    origin(req: operations.OriginRequest, config?: AxiosRequestConfig): Promise<operations.OriginResponse>;
    /**
     * originBatch - [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
    **/
    originBatch(req: operations.OriginBatchRequest, config?: AxiosRequestConfig): Promise<operations.OriginBatchResponse>;
    /**
     * parseChineseName - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
    **/
    parseChineseName(req: operations.ParseChineseNameRequest, config?: AxiosRequestConfig): Promise<operations.ParseChineseNameResponse>;
    /**
     * parseChineseNameBatch - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
    **/
    parseChineseNameBatch(req: operations.ParseChineseNameBatchRequest, config?: AxiosRequestConfig): Promise<operations.ParseChineseNameBatchResponse>;
    /**
     * parseJapaneseName - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
    **/
    parseJapaneseName(req: operations.ParseJapaneseNameRequest, config?: AxiosRequestConfig): Promise<operations.ParseJapaneseNameResponse>;
    /**
     * parseJapaneseNameBatch - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
    **/
    parseJapaneseNameBatch(req: operations.ParseJapaneseNameBatchRequest, config?: AxiosRequestConfig): Promise<operations.ParseJapaneseNameBatchResponse>;
    /**
     * parseName - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
    **/
    parseName(req: operations.ParseNameRequest, config?: AxiosRequestConfig): Promise<operations.ParseNameResponse>;
    /**
     * parseNameBatch - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
    **/
    parseNameBatch(req: operations.ParseNameBatchRequest, config?: AxiosRequestConfig): Promise<operations.ParseNameBatchResponse>;
    /**
     * parseNameGeo - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
    **/
    parseNameGeo(req: operations.ParseNameGeoRequest, config?: AxiosRequestConfig): Promise<operations.ParseNameGeoResponse>;
    /**
     * parseNameGeoBatch - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision.
    **/
    parseNameGeoBatch(req: operations.ParseNameGeoBatchRequest, config?: AxiosRequestConfig): Promise<operations.ParseNameGeoBatchResponse>;
    /**
     * phoneCode - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
    **/
    phoneCode(req: operations.PhoneCodeRequest, config?: AxiosRequestConfig): Promise<operations.PhoneCodeResponse>;
    /**
     * phoneCodeBatch - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
    **/
    phoneCodeBatch(req: operations.PhoneCodeBatchRequest, config?: AxiosRequestConfig): Promise<operations.PhoneCodeBatchResponse>;
    /**
     * phoneCodeGeo - [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
    **/
    phoneCodeGeo(req: operations.PhoneCodeGeoRequest, config?: AxiosRequestConfig): Promise<operations.PhoneCodeGeoResponse>;
    /**
     * phoneCodeGeoBatch - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
    **/
    phoneCodeGeoBatch(req: operations.PhoneCodeGeoBatchRequest, config?: AxiosRequestConfig): Promise<operations.PhoneCodeGeoBatchResponse>;
    /**
     * phoneCodeGeoFeedbackLoop - [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
    **/
    phoneCodeGeoFeedbackLoop(req: operations.PhoneCodeGeoFeedbackLoopRequest, config?: AxiosRequestConfig): Promise<operations.PhoneCodeGeoFeedbackLoopResponse>;
    /**
     * pinyinChineseName - Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
    **/
    pinyinChineseName(req: operations.PinyinChineseNameRequest, config?: AxiosRequestConfig): Promise<operations.PinyinChineseNameResponse>;
    /**
     * pinyinChineseNameBatch - Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).
    **/
    pinyinChineseNameBatch(req: operations.PinyinChineseNameBatchRequest, config?: AxiosRequestConfig): Promise<operations.PinyinChineseNameBatchResponse>;
    /**
     * softwareVersion - Get the current software version
    **/
    softwareVersion(config?: AxiosRequestConfig): Promise<operations.SoftwareVersionResponse>;
    /**
     * taxonomyClasses - Print the taxonomy classes valid for the given classifier.
    **/
    taxonomyClasses(req: operations.TaxonomyClassesRequest, config?: AxiosRequestConfig): Promise<operations.TaxonomyClassesResponse>;
    /**
     * usRaceEthnicity - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
    **/
    usRaceEthnicity(req: operations.UsRaceEthnicityRequest, config?: AxiosRequestConfig): Promise<operations.UsRaceEthnicityResponse>;
    /**
     * usRaceEthnicityBatch - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
    **/
    usRaceEthnicityBatch(req: operations.UsRaceEthnicityBatchRequest, config?: AxiosRequestConfig): Promise<operations.UsRaceEthnicityBatchResponse>;
    /**
     * usRaceEthnicityZip5 - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
    **/
    usRaceEthnicityZip5(req: operations.UsRaceEthnicityZip5Request, config?: AxiosRequestConfig): Promise<operations.UsRaceEthnicityZip5Response>;
    /**
     * usZipRaceEthnicityBatch - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
    **/
    usZipRaceEthnicityBatch(req: operations.UsZipRaceEthnicityBatchRequest, config?: AxiosRequestConfig): Promise<operations.UsZipRaceEthnicityBatchResponse>;
}
export {};
