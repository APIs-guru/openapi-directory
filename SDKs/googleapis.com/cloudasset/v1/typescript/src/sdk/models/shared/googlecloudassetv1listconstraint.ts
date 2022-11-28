import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssetV1ListConstraint
/** 
 * A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
**/
export class GoogleCloudAssetV1ListConstraint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=supportsIn" })
  supportsIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportsUnder" })
  supportsUnder?: boolean;
}
