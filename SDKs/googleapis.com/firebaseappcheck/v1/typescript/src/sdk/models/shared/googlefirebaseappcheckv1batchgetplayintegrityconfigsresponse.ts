import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseAppcheckV1PlayIntegrityConfig } from "./googlefirebaseappcheckv1playintegrityconfig";


// GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse
/** 
 * Response message for the BatchGetPlayIntegrityConfigs method.
**/
export class GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GoogleFirebaseAppcheckV1PlayIntegrityConfig })
  configs?: GoogleFirebaseAppcheckV1PlayIntegrityConfig[];
}
