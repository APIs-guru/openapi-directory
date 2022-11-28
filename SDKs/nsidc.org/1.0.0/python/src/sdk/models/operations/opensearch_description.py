from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OpensearchDescriptionResponse:
    content_type: str = field()
    status_code: int = field()
    opensearch_description_200_application_opensearchdescription_plus_xml_string: Optional[str] = field(default=None)
    
