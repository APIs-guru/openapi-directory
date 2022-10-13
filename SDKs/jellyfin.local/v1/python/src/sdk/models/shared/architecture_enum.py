from dataclasses import dataclass, field
from typing import Enum

class ArchitectureEnum(str, Enum):
    X86 = "X86"
    X64 = "X64"
    ARM = "Arm"
    ARM64 = "Arm64"
    WASM = "Wasm"

