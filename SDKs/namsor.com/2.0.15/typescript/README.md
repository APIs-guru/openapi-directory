# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AnonymizeRequest, AnonymizeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AnonymizeRequest = {
  pathParams: {
    anonymized: true,
    source: "dignissimos",
  },
};

sdk.sdk.anonymize(req).then((res: AnonymizeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `anonymize` - Activate/deactivate anonymization for a source.
* `apiStatus` - Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
* `apiUsage` - Print current API usage.
* `apiUsageHistory` - Print historical API usage.
* `apiUsageHistoryAggregate` - Print historical API usage (in an aggregated view, by service, by day/hour/min).
* `availableServices` - List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
* `chineseNameCandidates` - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
* `chineseNameCandidatesBatch` - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* `chineseNameCandidatesGenderBatch` - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
* `chineseNameGenderCandidates` - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
* `chineseNameMatch` - Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
* `chineseNameMatchBatch` - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* `corridor` - [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
* `corridorBatch` - [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
* `country` - [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
* `countryBatch` - [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
* `diaspora` - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* `diasporaBatch` - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* `disable` - Activate/deactivate an API Key.
* `gender` - Infer the likely gender of a name.
* `genderBatch` - Infer the likely gender of up to 100 names, detecting automatically the cultural context.
* `genderChineseName` - Infer the likely gender of a Chinese full name ex. 王晓明
* `genderChineseNameBatch` - Infer the likely gender of up to 100 full names ex. 王晓明
* `genderChineseNamePinyin` - Infer the likely gender of a Chinese name in LATIN (Pinyin).
* `genderChineseNamePinyinBatch` - Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
* `genderFull` - Infer the likely gender of a full name, ex. John H. Smith
* `genderFullBatch` - Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
* `genderFullGeo` - Infer the likely gender of a full name, given a local context (ISO2 country code).
* `genderFullGeoBatch` - Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
* `genderGeo` - Infer the likely gender of a name, given a local context (ISO2 country code).
* `genderGeoBatch` - Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
* `genderJapaneseNameFull` - Infer the likely gender of a Japanese full name ex. 王晓明
* `genderJapaneseNameFullBatch` - Infer the likely gender of up to 100 full names
* `genderJapaneseNamePinyin` - Infer the likely gender of a Japanese name in LATIN (Pinyin).
* `genderJapaneseNamePinyinBatch` - Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
* `japaneseNameGenderKanjiCandidatesBatch` - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
* `japaneseNameKanjiCandidates` - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
* `japaneseNameKanjiCandidatesBatch` - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
* `japaneseNameKanjiCandidates1` - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
* `japaneseNameLatinCandidates` - Romanize japanese name, based on the name in Kanji.
* `japaneseNameLatinCandidatesBatch` - Romanize japanese names, based on the name in KANJI
* `japaneseNameMatch` - Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* `japaneseNameMatchBatch` - Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
* `japaneseNameMatchFeedbackLoop` - [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* `learnable` - Activate/deactivate learning from a source.
* `nameType` - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* `nameTypeBatch` - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
* `nameTypeGeo` - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* `nameTypeGeoBatch` - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
* `origin` - [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
* `originBatch` - [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
* `parseChineseName` - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
* `parseChineseNameBatch` - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
* `parseJapaneseName` - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
* `parseJapaneseNameBatch` - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 
* `parseName` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
* `parseNameBatch` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
* `parseNameGeo` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
* `parseNameGeoBatch` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
* `phoneCode` - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
* `phoneCodeBatch` - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
* `phoneCodeGeo` - [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
* `phoneCodeGeoBatch` - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
* `phoneCodeGeoFeedbackLoop` - [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
* `pinyinChineseName` - Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
* `pinyinChineseNameBatch` - Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).
* `softwareVersion` - Get the current software version
* `taxonomyClasses` - Print the taxonomy classes valid for the given classifier.
* `usRaceEthnicity` - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* `usRaceEthnicityBatch` - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* `usRaceEthnicityZip5` - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* `usZipRaceEthnicityBatch` - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
