import { SpeakeasyBase } from "../../../internal/utils";
import { Hl7SchemaConfig } from "./hl7schemaconfig";
import { Hl7TypesConfig } from "./hl7typesconfig";
export declare enum SchemaPackageSchematizedParsingTypeEnum {
    SchematizedParsingTypeUnspecified = "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED",
    SoftFail = "SOFT_FAIL",
    HardFail = "HARD_FAIL"
}
export declare enum SchemaPackageUnexpectedSegmentHandlingEnum {
    UnexpectedSegmentHandlingModeUnspecified = "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED",
    Fail = "FAIL",
    Skip = "SKIP",
    Parse = "PARSE"
}
/**
 * A schema package contains a set of schemas and type definitions.
**/
export declare class SchemaPackage extends SpeakeasyBase {
    ignoreMinOccurs?: boolean;
    schemas?: Hl7SchemaConfig[];
    schematizedParsingType?: SchemaPackageSchematizedParsingTypeEnum;
    types?: Hl7TypesConfig[];
    unexpectedSegmentHandling?: SchemaPackageUnexpectedSegmentHandlingEnum;
}
