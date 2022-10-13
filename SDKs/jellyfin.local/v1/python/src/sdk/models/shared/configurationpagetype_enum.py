from dataclasses import dataclass, field
from typing import Enum

class ConfigurationPageTypeEnum(str, Enum):
    PLUGIN_CONFIGURATION = "PluginConfiguration"
    NONE = "None"

