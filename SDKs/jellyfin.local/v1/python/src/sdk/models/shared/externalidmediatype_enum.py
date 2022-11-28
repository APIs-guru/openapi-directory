from dataclasses import dataclass, field
from enum import Enum

class ExternalIDMediaTypeEnum(str, Enum):
    ALBUM = "Album"
    ALBUM_ARTIST = "AlbumArtist"
    ARTIST = "Artist"
    BOX_SET = "BoxSet"
    EPISODE = "Episode"
    MOVIE = "Movie"
    OTHER_ARTIST = "OtherArtist"
    PERSON = "Person"
    RELEASE_GROUP = "ReleaseGroup"
    SEASON = "Season"
    SERIES = "Series"
    TRACK = "Track"

