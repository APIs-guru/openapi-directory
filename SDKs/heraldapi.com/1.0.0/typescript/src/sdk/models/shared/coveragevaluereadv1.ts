import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterTextV1 } from "./parametertextv1";


export enum CoverageValueReadV1InputTypeEnum {
    Date = "date",
    Number = "number",
    Integer = "integer",
    SelectOne = "select_one",
    SelectMany = "select_many",
    Address = "address",
    ClaimEvent = "claim_event",
    Email = "email",
    Phone = "phone",
    Year = "year",
    ShortText = "short_text",
    LongText = "long_text",
    Website = "website",
    File = "file"
}

export enum CoverageValueReadV1RequiredForEnum {
    Quote = "quote",
    Bind = "bind",
    Null = "null"
}


// CoverageValueReadV1
/** 
 * Coverage values assign specific values to coverage parameters.
**/
export class CoverageValueReadV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=affects_conditions" })
  affectsConditions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=child_coverage_values", elemType: CoverageValueReadV1 })
  childCoverageValues?: CoverageValueReadV1[];

  @SpeakeasyMetadata({ data: "json, name=coverage_parameter_id" })
  coverageParameterId?: string;

  @SpeakeasyMetadata({ data: "json, name=creates_array" })
  createsArray?: boolean;

  @SpeakeasyMetadata({ data: "json, name=input_type" })
  inputType?: CoverageValueReadV1InputTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter_text" })
  parameterText?: ParameterTextV1;

  @SpeakeasyMetadata({ data: "json, name=relevant_products" })
  relevantProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=required_for" })
  requiredFor?: CoverageValueReadV1RequiredForEnum[];

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}
