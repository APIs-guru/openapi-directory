from dataclasses import dataclass, field
from typing import Enum

class ChannelItemSortFieldEnum(str, Enum):
    NAME = "Name"
    COMMUNITY_RATING = "CommunityRating"
    PREMIERE_DATE = "PremiereDate"
    DATE_CREATED = "DateCreated"
    RUNTIME = "Runtime"
    PLAY_COUNT = "PlayCount"
    COMMUNITY_PLAY_COUNT = "CommunityPlayCount"

