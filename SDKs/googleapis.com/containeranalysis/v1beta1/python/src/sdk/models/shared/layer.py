from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LayerDirectiveEnum(str, Enum):
    DIRECTIVE_UNSPECIFIED = "DIRECTIVE_UNSPECIFIED"
    MAINTAINER = "MAINTAINER"
    RUN = "RUN"
    CMD = "CMD"
    LABEL = "LABEL"
    EXPOSE = "EXPOSE"
    ENV = "ENV"
    ADD = "ADD"
    COPY = "COPY"
    ENTRYPOINT = "ENTRYPOINT"
    VOLUME = "VOLUME"
    USER = "USER"
    WORKDIR = "WORKDIR"
    ARG = "ARG"
    ONBUILD = "ONBUILD"
    STOPSIGNAL = "STOPSIGNAL"
    HEALTHCHECK = "HEALTHCHECK"
    SHELL = "SHELL"


@dataclass_json
@dataclass
class Layer:
    r"""Layer
    Layer holds metadata specific to a layer of a Docker image.
    """
    
    arguments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arguments') }})
    directive: Optional[LayerDirectiveEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directive') }})
    
