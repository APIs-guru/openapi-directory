from dataclasses import dataclass, field
from typing import Enum

class UnratedItemEnum(str, Enum):
    MOVIE = "Movie"
    TRAILER = "Trailer"
    SERIES = "Series"
    MUSIC = "Music"
    BOOK = "Book"
    LIVE_TV_CHANNEL = "LiveTvChannel"
    LIVE_TV_PROGRAM = "LiveTvProgram"
    CHANNEL_CONTENT = "ChannelContent"
    OTHER = "Other"

