from dataclasses import dataclass, field
from enum import Enum

class OrderStatusEnum(str, Enum):
    MINUS_1 = "-1"
    ZERO = "0"
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"
    EIGHT = "8"
    NINE = "9"
    A = "A"
    B = "B"
    C = "C"
    D = "D"
    E = "E"

