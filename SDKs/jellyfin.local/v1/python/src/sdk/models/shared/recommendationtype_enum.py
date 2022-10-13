from dataclasses import dataclass, field
from typing import Enum

class RecommendationTypeEnum(str, Enum):
    SIMILAR_TO_RECENTLY_PLAYED = "SimilarToRecentlyPlayed"
    SIMILAR_TO_LIKED_ITEM = "SimilarToLikedItem"
    HAS_DIRECTOR_FROM_RECENTLY_PLAYED = "HasDirectorFromRecentlyPlayed"
    HAS_ACTOR_FROM_RECENTLY_PLAYED = "HasActorFromRecentlyPlayed"
    HAS_LIKED_DIRECTOR = "HasLikedDirector"
    HAS_LIKED_ACTOR = "HasLikedActor"

