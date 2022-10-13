from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDPathParams:
    document_id: int = field(default=None, metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    publication_id: int = field(default=None, metadata={'path_param': { 'field_name': 'publicationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDRequest:
    path_params: GetAPIV1PublicationsPublicationIDDocumentsDocumentIDPathParams = field(default=None)
    

@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    publication_document: Optional[shared.PublicationDocument] = field(default=None)
    status_code: int = field(default=None)
    
