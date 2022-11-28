from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDPathParams:
    document_id: int = field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    publication_id: int = field(metadata={'path_param': { 'field_name': 'publicationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDRequest:
    path_params: GetAPIV1PublicationsPublicationIDDocumentsDocumentIDPathParams = field()
    

@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    publication_document: Optional[shared.PublicationDocument] = field(default=None)
    
