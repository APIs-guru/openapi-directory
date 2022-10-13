from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ecocertification

class SustainabilityCertificationsBreeamCertificationEnum(str, Enum):
    BREEAM_CERTIFICATION_UNSPECIFIED = "BREEAM_CERTIFICATION_UNSPECIFIED"
    NO_BREEAM_CERTIFICATION = "NO_BREEAM_CERTIFICATION"
    BREEAM_PASS = "BREEAM_PASS"
    BREEAM_GOOD = "BREEAM_GOOD"
    BREEAM_VERY_GOOD = "BREEAM_VERY_GOOD"
    BREEAM_EXCELLENT = "BREEAM_EXCELLENT"
    BREEAM_OUTSTANDING = "BREEAM_OUTSTANDING"

class SustainabilityCertificationsBreeamCertificationExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class SustainabilityCertificationsLeedCertificationEnum(str, Enum):
    LEED_CERTIFICATION_UNSPECIFIED = "LEED_CERTIFICATION_UNSPECIFIED"
    NO_LEED_CERTIFICATION = "NO_LEED_CERTIFICATION"
    LEED_CERTIFIED = "LEED_CERTIFIED"
    LEED_SILVER = "LEED_SILVER"
    LEED_GOLD = "LEED_GOLD"
    LEED_PLATINUM = "LEED_PLATINUM"

class SustainabilityCertificationsLeedCertificationExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class SustainabilityCertifications:
    breeam_certification: Optional[SustainabilityCertificationsBreeamCertificationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breeamCertification' }})
    breeam_certification_exception: Optional[SustainabilityCertificationsBreeamCertificationExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breeamCertificationException' }})
    eco_certifications: Optional[List[ecocertification.EcoCertification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ecoCertifications' }})
    leed_certification: Optional[SustainabilityCertificationsLeedCertificationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leedCertification' }})
    leed_certification_exception: Optional[SustainabilityCertificationsLeedCertificationExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leedCertificationException' }})
    
