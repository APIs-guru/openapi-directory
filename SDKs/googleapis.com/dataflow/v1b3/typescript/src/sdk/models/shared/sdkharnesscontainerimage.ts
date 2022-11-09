import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SdkHarnessContainerImage
/** 
 * Defines an SDK harness container for executing Dataflow pipelines.
**/
export class SdkHarnessContainerImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @Metadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=useSingleCorePerContainer" })
  useSingleCorePerContainer?: boolean;
}
