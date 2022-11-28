# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AnonymizeRequest(
    path_params=operations.AnonymizePathParams(
        anonymized=True,
        source="dignissimos",
    ),
)
    
res = s.sdk.anonymize(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `anonymize` - Activate/deactivate anonymization for a source.
* `api_status` - Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
* `api_usage` - Print current API usage.
* `api_usage_history` - Print historical API usage.
* `api_usage_history_aggregate` - Print historical API usage (in an aggregated view, by service, by day/hour/min).
* `available_services` - List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
* `chinese_name_candidates` - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
* `chinese_name_candidates_batch` - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* `chinese_name_candidates_gender_batch` - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
* `chinese_name_gender_candidates` - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
* `chinese_name_match` - Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
* `chinese_name_match_batch` - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* `corridor` - [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
* `corridor_batch` - [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
* `country` - [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
* `country_batch` - [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
* `diaspora` - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* `diaspora_batch` - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* `disable` - Activate/deactivate an API Key.
* `gender` - Infer the likely gender of a name.
* `gender_batch` - Infer the likely gender of up to 100 names, detecting automatically the cultural context.
* `gender_chinese_name` - Infer the likely gender of a Chinese full name ex. 王晓明
* `gender_chinese_name_batch` - Infer the likely gender of up to 100 full names ex. 王晓明
* `gender_chinese_name_pinyin` - Infer the likely gender of a Chinese name in LATIN (Pinyin).
* `gender_chinese_name_pinyin_batch` - Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
* `gender_full` - Infer the likely gender of a full name, ex. John H. Smith
* `gender_full_batch` - Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
* `gender_full_geo` - Infer the likely gender of a full name, given a local context (ISO2 country code).
* `gender_full_geo_batch` - Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
* `gender_geo` - Infer the likely gender of a name, given a local context (ISO2 country code).
* `gender_geo_batch` - Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
* `gender_japanese_name_full` - Infer the likely gender of a Japanese full name ex. 王晓明
* `gender_japanese_name_full_batch` - Infer the likely gender of up to 100 full names
* `gender_japanese_name_pinyin` - Infer the likely gender of a Japanese name in LATIN (Pinyin).
* `gender_japanese_name_pinyin_batch` - Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
* `japanese_name_gender_kanji_candidates_batch` - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
* `japanese_name_kanji_candidates` - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
* `japanese_name_kanji_candidates_batch` - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
* `japanese_name_kanji_candidates_1` - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
* `japanese_name_latin_candidates` - Romanize japanese name, based on the name in Kanji.
* `japanese_name_latin_candidates_batch` - Romanize japanese names, based on the name in KANJI
* `japanese_name_match` - Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* `japanese_name_match_batch` - Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
* `japanese_name_match_feedback_loop` - [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* `learnable` - Activate/deactivate learning from a source.
* `name_type` - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* `name_type_batch` - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
* `name_type_geo` - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* `name_type_geo_batch` - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
* `origin` - [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
* `origin_batch` - [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
* `parse_chinese_name` - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
* `parse_chinese_name_batch` - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
* `parse_japanese_name` - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
* `parse_japanese_name_batch` - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 
* `parse_name` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
* `parse_name_batch` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
* `parse_name_geo` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
* `parse_name_geo_batch` - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
* `phone_code` - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
* `phone_code_batch` - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
* `phone_code_geo` - [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
* `phone_code_geo_batch` - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
* `phone_code_geo_feedback_loop` - [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
* `pinyin_chinese_name` - Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
* `pinyin_chinese_name_batch` - Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).
* `software_version` - Get the current software version
* `taxonomy_classes` - Print the taxonomy classes valid for the given classifier.
* `us_race_ethnicity` - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* `us_race_ethnicity_batch` - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* `us_race_ethnicity_zip5` - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* `us_zip_race_ethnicity_batch` - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
