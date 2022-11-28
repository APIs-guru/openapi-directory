from dataclasses import dataclass, field
from enum import Enum

class VehicleProfileIDEnum(str, Enum):
    CAR = "car"
    BIKE = "bike"
    FOOT = "foot"
    HIKE = "hike"
    MTB = "mtb"
    RACINGBIKE = "racingbike"
    SCOOTER = "scooter"
    TRUCK = "truck"
    SMALL_TRUCK = "small_truck"

