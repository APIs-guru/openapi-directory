from dataclasses import dataclass, field
from typing import Enum

class ItemFilterEnum(str, Enum):
    IS_FOLDER = "IsFolder"
    IS_NOT_FOLDER = "IsNotFolder"
    IS_UNPLAYED = "IsUnplayed"
    IS_PLAYED = "IsPlayed"
    IS_FAVORITE = "IsFavorite"
    IS_RESUMABLE = "IsResumable"
    LIKES = "Likes"
    DISLIKES = "Dislikes"
    IS_FAVORITE_OR_LIKES = "IsFavoriteOrLikes"

