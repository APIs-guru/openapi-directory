from dataclasses import dataclass, field
from enum import Enum

class MetadataFieldEnum(str, Enum):
    CAST = "Cast"
    GENRES = "Genres"
    PRODUCTION_LOCATIONS = "ProductionLocations"
    STUDIOS = "Studios"
    TAGS = "Tags"
    NAME = "Name"
    OVERVIEW = "Overview"
    RUNTIME = "Runtime"
    OFFICIAL_RATING = "OfficialRating"

