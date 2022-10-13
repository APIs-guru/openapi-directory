from dataclasses import dataclass, field
from typing import Enum

class ChannelMediaContentTypeEnum(str, Enum):
    CLIP = "Clip"
    PODCAST = "Podcast"
    TRAILER = "Trailer"
    MOVIE = "Movie"
    EPISODE = "Episode"
    SONG = "Song"
    MOVIE_EXTRA = "MovieExtra"
    TV_EXTRA = "TvExtra"

