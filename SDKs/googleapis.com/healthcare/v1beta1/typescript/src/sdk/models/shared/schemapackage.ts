import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hl7SchemaConfig } from "./hl7schemaconfig";
import { Hl7TypesConfig } from "./hl7typesconfig";


export enum SchemaPackageSchematizedParsingTypeEnum {
    SchematizedParsingTypeUnspecified = "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED",
    SoftFail = "SOFT_FAIL",
    HardFail = "HARD_FAIL"
}

export enum SchemaPackageUnexpectedSegmentHandlingEnum {
    UnexpectedSegmentHandlingModeUnspecified = "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED",
    Fail = "FAIL",
    Skip = "SKIP",
    Parse = "PARSE"
}


// SchemaPackage
/** 
 * A schema package contains a set of schemas and type definitions.
**/
export class SchemaPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignoreMinOccurs" })
  ignoreMinOccurs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schemas", elemType: Hl7SchemaConfig })
  schemas?: Hl7SchemaConfig[];

  @SpeakeasyMetadata({ data: "json, name=schematizedParsingType" })
  schematizedParsingType?: SchemaPackageSchematizedParsingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=types", elemType: Hl7TypesConfig })
  types?: Hl7TypesConfig[];

  @SpeakeasyMetadata({ data: "json, name=unexpectedSegmentHandling" })
  unexpectedSegmentHandling?: SchemaPackageUnexpectedSegmentHandlingEnum;
}
