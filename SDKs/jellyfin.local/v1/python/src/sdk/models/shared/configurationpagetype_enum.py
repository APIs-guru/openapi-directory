from dataclasses import dataclass, field
from enum import Enum

class ConfigurationPageTypeEnum(str, Enum):
    PLUGIN_CONFIGURATION = "PluginConfiguration"
    NONE = "None"

