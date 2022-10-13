from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import body
from . import documentstyle
from . import footer
from . import footnote
from . import header
from . import inlineobject
from . import list
from . import namedranges
from . import namedstyles
from . import positionedobject
from . import suggesteddocumentstyle
from . import suggestednamedstyles

class DocumentSuggestionsViewModeEnum(str, Enum):
    DEFAULT_FOR_CURRENT_ACCESS = "DEFAULT_FOR_CURRENT_ACCESS"
    SUGGESTIONS_INLINE = "SUGGESTIONS_INLINE"
    PREVIEW_SUGGESTIONS_ACCEPTED = "PREVIEW_SUGGESTIONS_ACCEPTED"
    PREVIEW_WITHOUT_SUGGESTIONS = "PREVIEW_WITHOUT_SUGGESTIONS"


@dataclass_json
@dataclass
class Document:
    body: Optional[body.Body] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    document_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentId' }})
    document_style: Optional[documentstyle.DocumentStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentStyle' }})
    footers: Optional[dict[str, footer.Footer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footers' }})
    footnotes: Optional[dict[str, footnote.Footnote]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footnotes' }})
    headers: Optional[dict[str, header.Header]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    inline_objects: Optional[dict[str, inlineobject.InlineObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineObjects' }})
    lists: Optional[dict[str, list.List]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lists' }})
    named_ranges: Optional[dict[str, namedranges.NamedRanges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedRanges' }})
    named_styles: Optional[namedstyles.NamedStyles] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedStyles' }})
    positioned_objects: Optional[dict[str, positionedobject.PositionedObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionedObjects' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    suggested_document_style_changes: Optional[dict[str, suggesteddocumentstyle.SuggestedDocumentStyle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedDocumentStyleChanges' }})
    suggested_named_styles_changes: Optional[dict[str, suggestednamedstyles.SuggestedNamedStyles]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedNamedStylesChanges' }})
    suggestions_view_mode: Optional[DocumentSuggestionsViewModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestionsViewMode' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
