from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadPathParams:
    document_id: int = field(default=None, metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    publication_id: int = field(default=None, metadata={'path_param': { 'field_name': 'publicationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadRequest:
    path_params: GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadPathParams = field(default=None)
    

@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
