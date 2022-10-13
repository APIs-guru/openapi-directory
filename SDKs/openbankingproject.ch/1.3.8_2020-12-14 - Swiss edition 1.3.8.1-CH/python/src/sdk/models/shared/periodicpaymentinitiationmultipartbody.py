from dataclasses import dataclass, field
from typing import Any,Optional
from . import periodicpaymentinitiation_xml_part2_standingordertype_json


@dataclass
class PeriodicPaymentInitiationMultipartBody:
    json_standingorder_type: Optional[periodicpaymentinitiation_xml_part2_standingordertype_json.PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON] = field(default=None, metadata={'multipart_form': { 'field_name': 'json_standingorderType', 'json': True }})
    xml_sct: Optional[Any] = field(default=None, metadata={'multipart_form': { 'field_name': 'xml_sct', 'json': True }})
    
