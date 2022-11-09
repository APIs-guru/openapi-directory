import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Step } from "./step";
/**
 * > **Preview:** This field is covered by the > [Pre-GA Offerings Terms](https://cloud.google.com/terms/service-terms) of > the Google Cloud Terms of Service. Pre-GA features might have limited > support, and changes to pre-GA features might not be compatible with > other pre-GA versions. For more information, see the > [launch stage descriptions](https://cloud.google.com/products#product-launch-stages). > This field is usable only if your project has access. See the > [access request page](https://docs.google.com/forms/d/e/1FAIpQLSdgwrSV8Y4xZv_tvI6X2JEGX1-ty9yizv3_EAOVHWVKXvDLEA/viewform). Represents the current status of this execution.
**/
export declare class Status extends SpeakeasyBase {
    currentSteps?: Step[];
}
