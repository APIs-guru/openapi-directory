import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterMetadata } from "./parametermetadata";
import { SdkInfo } from "./sdkinfo";


// RuntimeMetadata
/** 
 * RuntimeMetadata describing a runtime environment.
**/
export class RuntimeMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.ParameterMetadata })
  parameters?: ParameterMetadata[];

  @Metadata({ data: "json, name=sdkInfo" })
  sdkInfo?: SdkInfo;
}
