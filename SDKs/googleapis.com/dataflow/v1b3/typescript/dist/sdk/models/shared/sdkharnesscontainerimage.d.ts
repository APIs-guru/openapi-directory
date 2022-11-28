import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines an SDK harness container for executing Dataflow pipelines.
**/
export declare class SDKHarnessContainerImage extends SpeakeasyBase {
    capabilities?: string[];
    containerImage?: string;
    environmentId?: string;
    useSingleCorePerContainer?: boolean;
}
