from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DocumentSuggestionsViewModeEnum(str, Enum):
    DEFAULT_FOR_CURRENT_ACCESS = "DEFAULT_FOR_CURRENT_ACCESS"
    SUGGESTIONS_INLINE = "SUGGESTIONS_INLINE"
    PREVIEW_SUGGESTIONS_ACCEPTED = "PREVIEW_SUGGESTIONS_ACCEPTED"
    PREVIEW_WITHOUT_SUGGESTIONS = "PREVIEW_WITHOUT_SUGGESTIONS"


@dataclass_json
@dataclass
class Document:
    r"""Document
    A Google Docs document.
    """
    
    body: Optional[Body] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    document_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentId') }})
    document_style: Optional[DocumentStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentStyle') }})
    footers: Optional[dict[str, Footer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footers') }})
    footnotes: Optional[dict[str, Footnote]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnotes') }})
    headers: Optional[dict[str, Header]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    inline_objects: Optional[dict[str, InlineObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineObjects') }})
    lists: Optional[dict[str, List]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lists') }})
    named_ranges: Optional[dict[str, NamedRanges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRanges') }})
    named_styles: Optional[NamedStyles] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedStyles') }})
    positioned_objects: Optional[dict[str, PositionedObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionedObjects') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    suggested_document_style_changes: Optional[dict[str, SuggestedDocumentStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDocumentStyleChanges') }})
    suggested_named_styles_changes: Optional[dict[str, SuggestedNamedStyles]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedNamedStylesChanges') }})
    suggestions_view_mode: Optional[DocumentSuggestionsViewModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestionsViewMode') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class DocumentInput:
    r"""DocumentInput
    A Google Docs document.
    """
    
    body: Optional[BodyInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    document_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentId') }})
    document_style: Optional[DocumentStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentStyle') }})
    footers: Optional[dict[str, FooterInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footers') }})
    footnotes: Optional[dict[str, FootnoteInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnotes') }})
    headers: Optional[dict[str, HeaderInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    inline_objects: Optional[dict[str, InlineObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineObjects') }})
    lists: Optional[dict[str, List]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lists') }})
    named_ranges: Optional[dict[str, NamedRanges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRanges') }})
    named_styles: Optional[NamedStyles] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedStyles') }})
    positioned_objects: Optional[dict[str, PositionedObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionedObjects') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    suggested_document_style_changes: Optional[dict[str, SuggestedDocumentStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDocumentStyleChanges') }})
    suggested_named_styles_changes: Optional[dict[str, SuggestedNamedStyles]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedNamedStylesChanges') }})
    suggestions_view_mode: Optional[DocumentSuggestionsViewModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestionsViewMode') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
