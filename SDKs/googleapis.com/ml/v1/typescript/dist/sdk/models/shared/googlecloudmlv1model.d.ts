import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1VersionInput } from "./googlecloudmlv1version";
import { GoogleCloudMlV1Version } from "./googlecloudmlv1version";
/**
 * Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
**/
export declare class GoogleCloudMlV1ModelInput extends SpeakeasyBase {
    defaultVersion?: GoogleCloudMlV1VersionInput;
    description?: string;
    etag?: string;
    labels?: Map<string, string>;
    name?: string;
    onlinePredictionConsoleLogging?: boolean;
    onlinePredictionLogging?: boolean;
    regions?: string[];
}
/**
 * Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
**/
export declare class GoogleCloudMlV1Model extends SpeakeasyBase {
    defaultVersion?: GoogleCloudMlV1Version;
    description?: string;
    etag?: string;
    labels?: Map<string, string>;
    name?: string;
    onlinePredictionConsoleLogging?: boolean;
    onlinePredictionLogging?: boolean;
    regions?: string[];
}
