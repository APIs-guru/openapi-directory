import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SDKHarnessContainerImage
/** 
 * Defines an SDK harness container for executing Dataflow pipelines.
**/
export class SDKHarnessContainerImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=useSingleCorePerContainer" })
  useSingleCorePerContainer?: boolean;
}
