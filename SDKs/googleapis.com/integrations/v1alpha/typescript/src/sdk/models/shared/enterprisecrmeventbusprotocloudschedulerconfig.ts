import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnterpriseCrmEventbusProtoCloudSchedulerConfig
/** 
 * Cloud Scheduler Trigger configuration
**/
export class EnterpriseCrmEventbusProtoCloudSchedulerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cronTab" })
  cronTab?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;
}
