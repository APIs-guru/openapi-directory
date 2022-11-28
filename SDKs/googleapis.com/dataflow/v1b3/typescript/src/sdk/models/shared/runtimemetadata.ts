import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterMetadata } from "./parametermetadata";
import { SDKInfo } from "./sdkinfo";



// RuntimeMetadata
/** 
 * RuntimeMetadata describing a runtime environment.
**/
export class RuntimeMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: ParameterMetadata })
  parameters?: ParameterMetadata[];

  @SpeakeasyMetadata({ data: "json, name=sdkInfo" })
  sdkInfo?: SDKInfo;
}
