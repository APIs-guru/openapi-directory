from dataclasses import dataclass, field
from enum import Enum

class ObAddressTypeCodeEnum(str, Enum):
    BUSINESS = "Business"
    CORRESPONDENCE = "Correspondence"
    DELIVERY_TO = "DeliveryTo"
    MAIL_TO = "MailTo"
    PO_BOX = "POBox"
    POSTAL = "Postal"
    RESIDENTIAL = "Residential"
    STATEMENT = "Statement"

