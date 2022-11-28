from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadPathParams:
    document_id: int = field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    publication_id: int = field(metadata={'path_param': { 'field_name': 'publicationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadRequest:
    path_params: GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadPathParams = field()
    

@dataclass
class GetAPIV1PublicationsPublicationIDDocumentsDocumentIDDownloadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
