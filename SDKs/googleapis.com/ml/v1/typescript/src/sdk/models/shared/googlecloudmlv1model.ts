import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1VersionInput } from "./googlecloudmlv1version";
import { GoogleCloudMlV1Version } from "./googlecloudmlv1version";



// GoogleCloudMlV1ModelInput
/** 
 * Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
**/
export class GoogleCloudMlV1ModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultVersion" })
  defaultVersion?: GoogleCloudMlV1VersionInput;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=onlinePredictionConsoleLogging" })
  onlinePredictionConsoleLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=onlinePredictionLogging" })
  onlinePredictionLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: string[];
}


// GoogleCloudMlV1Model
/** 
 * Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
**/
export class GoogleCloudMlV1Model extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultVersion" })
  defaultVersion?: GoogleCloudMlV1Version;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=onlinePredictionConsoleLogging" })
  onlinePredictionConsoleLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=onlinePredictionLogging" })
  onlinePredictionLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: string[];
}
