import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
/**
 * This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus.
**/
export declare class GoogleCloudIntegrationsV1alphaEventParameter extends SpeakeasyBase {
    key?: string;
    value?: GoogleCloudIntegrationsV1alphaValueType;
}
