# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AnonymizeRequest{
        PathParams: operations.AnonymizePathParams{
            Anonymized: true,
            Source: "dignissimos",
        },
    }
    
    res, err := s.Sdk.Anonymize(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `Anonymize` - Activate/deactivate anonymization for a source.
* `APIStatus` - Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
* `APIUsage` - Print current API usage.
* `APIUsageHistory` - Print historical API usage.
* `APIUsageHistoryAggregate` - Print historical API usage (in an aggregated view, by service, by day/hour/min).
* `AvailableServices` - List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
* `ChineseNameCandidates` - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
* `ChineseNameCandidatesBatch` - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* `ChineseNameCandidatesGenderBatch` - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
* `ChineseNameGenderCandidates` - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
* `ChineseNameMatch` - Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
* `ChineseNameMatchBatch` - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* `Corridor` - [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
* `CorridorBatch` - [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
* `Country` - [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
* `CountryBatch` - [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
* `Diaspora` - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* `DiasporaBatch` - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* `Disable` - Activate/deactivate an API Key.
* `Gender` - Infer the likely gender of a name.
* `GenderBatch` - Infer the likely gender of up to 100 names, detecting automatically the cultural context.
* `GenderChineseName` - Infer the likely gender of a Chinese full name ex. 王晓明
* `GenderChineseNameBatch` - Infer the likely gender of up to 100 full names ex. 王晓明
* `GenderChineseNamePinyin` - Infer the likely gender of a Chinese name in LATIN (Pinyin).
* `GenderChineseNamePinyinBatch` - Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
* `GenderFull` - Infer the likely gender of a full name, ex. John H. Smith
* `GenderFullBatch` - Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
* `GenderFullGeo` - Infer the likely gender of a full name, given a local context (ISO2 country code).
* `GenderFullGeoBatch` - Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
* `GenderGeo` - Infer the likely gender of a name, given a local context (ISO2 country code).
* `GenderGeoBatch` - Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
* `GenderJapaneseNameFull` - Infer the likely gender of a Japanese full name ex. 王晓明
* `GenderJapaneseNameFullBatch` - Infer the likely gender of up to 100 full names
* `GenderJapaneseNamePinyin` - Infer the likely gender of a Japanese name in LATIN (Pinyin).
* `GenderJapaneseNamePinyinBatch` - Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
* `JapaneseNameGenderKanjiCandidatesBatch` - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
* `JapaneseNameKanjiCandidates` - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
* `JapaneseNameKanjiCandidatesBatch` - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
* `JapaneseNameKanjiCandidates1` - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
* `JapaneseNameLatinCandidates` - Romanize japanese name, based on the name in Kanji.
* `JapaneseNameLatinCandidatesBatch` - Romanize japanese names, based on the name in KANJI
* `JapaneseNameMatch` - Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* `JapaneseNameMatchBatch` - Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
* `JapaneseNameMatchFeedbackLoop` - [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* `Learnable` - Activate/deactivate learning from a source.
* `NameType` - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* `NameTypeBatch` - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
* `NameTypeGeo` - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* `NameTypeGeoBatch` - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
* `Origin` - [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
* `OriginBatch` - [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
* `ParseChineseName` - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
* `ParseChineseNameBatch` - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
* `ParseJapaneseName` - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
* `ParseJapaneseNameBatch` - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 
* `ParseName` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
* `ParseNameBatch` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
* `ParseNameGeo` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
* `ParseNameGeoBatch` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
* `PhoneCode` - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
* `PhoneCodeBatch` - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
* `PhoneCodeGeo` - [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
* `PhoneCodeGeoBatch` - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
* `PhoneCodeGeoFeedbackLoop` - [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
* `PinyinChineseName` - Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
* `PinyinChineseNameBatch` - Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).
* `SoftwareVersion` - Get the current software version
* `TaxonomyClasses` - Print the taxonomy classes valid for the given classifier.
* `UsRaceEthnicity` - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* `UsRaceEthnicityBatch` - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* `UsRaceEthnicityZip5` - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* `UsZipRaceEthnicityBatch` - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
