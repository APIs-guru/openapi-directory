from dataclasses import dataclass, field
from enum import Enum

class FilesystemEnum(str, Enum):
    RAW = "raw"
    SWAP = "swap"
    EXT3 = "ext3"
    EXT4 = "ext4"
    INITRD = "initrd"

