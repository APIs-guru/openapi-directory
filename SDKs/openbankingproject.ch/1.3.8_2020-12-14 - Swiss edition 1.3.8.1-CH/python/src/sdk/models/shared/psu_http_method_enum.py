from dataclasses import dataclass, field
from enum import Enum

class PsuHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    PATCH = "PATCH"
    DELETE = "DELETE"

