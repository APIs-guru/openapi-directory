import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies HTTP paths served by a custom container. AI Platform Prediction sends requests to these paths on the container; the custom container must run an HTTP server that responds to these requests with appropriate responses. Read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements) for details on how to create your container image to meet these requirements.
**/
export declare class GoogleCloudMlV1RouteMap extends SpeakeasyBase {
    health?: string;
    predict?: string;
}
