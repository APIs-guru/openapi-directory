from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Dictionary:
    r"""GooglePrivacyDlpV2Dictionary
    Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase \"Sam Johnson\" will match all three phrases \"sam johnson\", \"Sam, Johnson\", and \"Sam (Johnson)\". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word \"jen\" will match the first three letters of the text \"jen123\" but will return no matches for \"jennifer\". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API.
    """
    
    cloud_storage_path: Optional[GooglePrivacyDlpV2CloudStoragePath] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudStoragePath') }})
    word_list: Optional[GooglePrivacyDlpV2WordList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wordList') }})
    
