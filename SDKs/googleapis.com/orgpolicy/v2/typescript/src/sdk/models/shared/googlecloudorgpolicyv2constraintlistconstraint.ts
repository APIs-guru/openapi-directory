import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudOrgpolicyV2ConstraintListConstraint
/** 
 * A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
**/
export class GoogleCloudOrgpolicyV2ConstraintListConstraint extends SpeakeasyBase {
  @Metadata({ data: "json, name=supportsIn" })
  supportsIn?: boolean;

  @Metadata({ data: "json, name=supportsUnder" })
  supportsUnder?: boolean;
}
