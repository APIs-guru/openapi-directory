import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Hl7SchemaConfig } from "./hl7schemaconfig";
import { Hl7TypesConfig } from "./hl7typesconfig";

export enum SchemaPackageSchematizedParsingTypeEnum {
    SchematizedParsingTypeUnspecified = "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED"
,    SoftFail = "SOFT_FAIL"
,    HardFail = "HARD_FAIL"
}

export enum SchemaPackageUnexpectedSegmentHandlingEnum {
    UnexpectedSegmentHandlingModeUnspecified = "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED"
,    Fail = "FAIL"
,    Skip = "SKIP"
,    Parse = "PARSE"
}


// SchemaPackage
/** 
 * A schema package contains a set of schemas and type definitions.
**/
export class SchemaPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignoreMinOccurs" })
  ignoreMinOccurs?: boolean;

  @Metadata({ data: "json, name=schemas", elemType: shared.Hl7SchemaConfig })
  schemas?: Hl7SchemaConfig[];

  @Metadata({ data: "json, name=schematizedParsingType" })
  schematizedParsingType?: SchemaPackageSchematizedParsingTypeEnum;

  @Metadata({ data: "json, name=types", elemType: shared.Hl7TypesConfig })
  types?: Hl7TypesConfig[];

  @Metadata({ data: "json, name=unexpectedSegmentHandling" })
  unexpectedSegmentHandling?: SchemaPackageUnexpectedSegmentHandlingEnum;
}
