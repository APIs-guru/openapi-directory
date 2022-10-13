from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LanguagesSpokenArabicSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenCantoneseSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenDutchSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenEnglishSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenFilipinoSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenFrenchSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenGermanSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenHindiSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenIndonesianSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenItalianSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenJapaneseSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenKoreanSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenMandarinSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenPortugueseSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenRussianSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenSpanishSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LanguagesSpokenVietnameseSpokenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class LanguagesSpoken:
    arabic_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arabicSpoken' }})
    arabic_spoken_exception: Optional[LanguagesSpokenArabicSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arabicSpokenException' }})
    cantonese_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cantoneseSpoken' }})
    cantonese_spoken_exception: Optional[LanguagesSpokenCantoneseSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cantoneseSpokenException' }})
    dutch_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dutchSpoken' }})
    dutch_spoken_exception: Optional[LanguagesSpokenDutchSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dutchSpokenException' }})
    english_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'englishSpoken' }})
    english_spoken_exception: Optional[LanguagesSpokenEnglishSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'englishSpokenException' }})
    filipino_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filipinoSpoken' }})
    filipino_spoken_exception: Optional[LanguagesSpokenFilipinoSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filipinoSpokenException' }})
    french_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frenchSpoken' }})
    french_spoken_exception: Optional[LanguagesSpokenFrenchSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frenchSpokenException' }})
    german_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'germanSpoken' }})
    german_spoken_exception: Optional[LanguagesSpokenGermanSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'germanSpokenException' }})
    hindi_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hindiSpoken' }})
    hindi_spoken_exception: Optional[LanguagesSpokenHindiSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hindiSpokenException' }})
    indonesian_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indonesianSpoken' }})
    indonesian_spoken_exception: Optional[LanguagesSpokenIndonesianSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indonesianSpokenException' }})
    italian_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italianSpoken' }})
    italian_spoken_exception: Optional[LanguagesSpokenItalianSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italianSpokenException' }})
    japanese_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'japaneseSpoken' }})
    japanese_spoken_exception: Optional[LanguagesSpokenJapaneseSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'japaneseSpokenException' }})
    korean_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'koreanSpoken' }})
    korean_spoken_exception: Optional[LanguagesSpokenKoreanSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'koreanSpokenException' }})
    mandarin_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mandarinSpoken' }})
    mandarin_spoken_exception: Optional[LanguagesSpokenMandarinSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mandarinSpokenException' }})
    portuguese_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portugueseSpoken' }})
    portuguese_spoken_exception: Optional[LanguagesSpokenPortugueseSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portugueseSpokenException' }})
    russian_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'russianSpoken' }})
    russian_spoken_exception: Optional[LanguagesSpokenRussianSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'russianSpokenException' }})
    spanish_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spanishSpoken' }})
    spanish_spoken_exception: Optional[LanguagesSpokenSpanishSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spanishSpokenException' }})
    vietnamese_spoken: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vietnameseSpoken' }})
    vietnamese_spoken_exception: Optional[LanguagesSpokenVietnameseSpokenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vietnameseSpokenException' }})
    
