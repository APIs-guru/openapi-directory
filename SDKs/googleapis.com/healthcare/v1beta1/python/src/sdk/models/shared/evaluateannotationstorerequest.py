from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudhealthcarev1beta1annotationbigquerydestination
from . import infotypeconfig


@dataclass_json
@dataclass
class EvaluateAnnotationStoreRequest:
    bigquery_destination: Optional[googlecloudhealthcarev1beta1annotationbigquerydestination.GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDestination' }})
    eval_info_type_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evalInfoTypeMapping' }})
    golden_info_type_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goldenInfoTypeMapping' }})
    golden_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goldenStore' }})
    info_type_config: Optional[infotypeconfig.InfoTypeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoTypeConfig' }})
    
