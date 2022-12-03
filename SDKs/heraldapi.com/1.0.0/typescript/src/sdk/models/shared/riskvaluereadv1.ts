import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterTextV1 } from "./parametertextv1";
import { ClaimEventV1 } from "./claimeventv1";
import { AddressV1 } from "./addressv1";



// RiskValueReadV1ConditionalOn
/** 
 * Array of risk parameters that triggered this question. Only returned by /applications endpoint.
**/
export class RiskValueReadV1ConditionalOn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=risk_parameter_id" })
  riskParameterId?: string[][];
}

export enum RiskValueReadV1InputTypeEnum {
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

export enum RiskValueReadV1RequiredForEnum {
    Quote = "quote",
    Bind = "bind",
    Null = "null"
}


// RiskValueReadV1
/** 
 * Risk values assign specific values to risk parameters.
**/
export class RiskValueReadV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=affects_conditions" })
  affectsConditions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=child_risk_values", elemType: RiskValueReadV1 })
  childRiskValues?: RiskValueReadV1[];

  @SpeakeasyMetadata({ data: "json, name=conditional_on" })
  conditionalOn?: RiskValueReadV1ConditionalOn;

  @SpeakeasyMetadata({ data: "json, name=creates_array" })
  createsArray?: boolean;

  @SpeakeasyMetadata({ data: "json, name=input_type" })
  inputType?: RiskValueReadV1InputTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter_text" })
  parameterText?: ParameterTextV1;

  @SpeakeasyMetadata({ data: "json, name=relevant_products" })
  relevantProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=required_for" })
  requiredFor?: RiskValueReadV1RequiredForEnum[];

  @SpeakeasyMetadata({ data: "json, name=risk_parameter_id" })
  riskParameterId?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}
