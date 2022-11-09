import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudMlV1Version } from "./googlecloudmlv1version";


// GoogleCloudMlV1Model
/** 
 * Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
**/
export class GoogleCloudMlV1Model extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultVersion" })
  defaultVersion?: GoogleCloudMlV1Version;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=onlinePredictionConsoleLogging" })
  onlinePredictionConsoleLogging?: boolean;

  @Metadata({ data: "json, name=onlinePredictionLogging" })
  onlinePredictionLogging?: boolean;

  @Metadata({ data: "json, name=regions" })
  regions?: string[];
}
