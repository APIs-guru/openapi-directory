from dataclasses import dataclass, field
from typing import Enum

class HiTypeEnumEnum(str, Enum):
    OP_CONSULTATION = "OPConsultation"
    PRESCRIPTION = "Prescription"
    DISCHARGE_SUMMARY = "DischargeSummary"
    DIAGNOSTIC_REPORT = "DiagnosticReport"

