from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FrontendSettingsLanguageSource:
    code: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    

@dataclass
class FrontendSettingsLanguageTarget:
    code: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    

@dataclass
class FrontendSettingsLanguage:
    source: Optional[FrontendSettingsLanguageSource] = field(default=None)
    target: Optional[FrontendSettingsLanguageTarget] = field(default=None)
    

@dataclass
class FrontendSettings:
    char_limit: Optional[int] = field(default=None)
    frontend_timeout: Optional[int] = field(default=None)
    language: Optional[FrontendSettingsLanguage] = field(default=None)
    
