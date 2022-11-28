from dataclasses import dataclass, field
from typing import Any,Optional
from . import *


@dataclass
class PeriodicPaymentInitiationMultipartBody:
    r"""PeriodicPaymentInitiationMultipartBody
    The multipart message definition for the initiation of a periodic payment initiation 
    where the information of the payment is contained in a pain.001 message (Part 1) and 
    the additional informations related to the periodic payment is an additional JSON message (Part 2).
    
    """
    
    json_standingorder_type: Optional[PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON] = field(default=None, metadata={'multipart_form': { 'field_name': 'json_standingorderType', 'json': True }})
    xml_sct: Optional[Any] = field(default=None, metadata={'multipart_form': { 'field_name': 'xml_sct', 'json': True }})
    
