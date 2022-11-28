import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElasticConfig } from "./elasticconfig";
import { KafkaConfig } from "./kafkaconfig";
import { PulsarDataExporterConfig } from "./pulsardataexporterconfig";
import { FileDataExporterConfig } from "./filedataexporterconfig";
import { MailerGenericExporterConfig } from "./mailergenericexporterconfig";
import { MailerConsoleExporterConfig } from "./mailerconsoleexporterconfig";
import { MailerMailgunExporterConfig } from "./mailermailgunexporterconfig";
import { MailerMailjetExporterConfig } from "./mailermailjetexporterconfig";
import { MailerSendgridExporterConfig } from "./mailersendgridexporterconfig";
import { CustomDataExporterConfig } from "./customdataexporterconfig";
import { Filtering } from "./filtering";
import { Location } from "./location";


export enum DataExporterConfigTypEnum {
    Kafka = "kafka",
    Pulsar = "pulsar",
    File = "file",
    Mailer = "mailer",
    Elastic = "elastic",
    Console = "console",
    Custom = "custom"
}


// DataExporterConfig
/** 
 * Settings to export Otorshi events
**/
export class DataExporterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bufferSize" })
  bufferSize?: number;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: any;

  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: string;

  @SpeakeasyMetadata({ data: "json, name=filtering" })
  filtering?: Filtering;

  @SpeakeasyMetadata({ data: "json, name=groupDuration" })
  groupDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=groupSize" })
  groupSize?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jsonWorkers" })
  jsonWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projection" })
  projection?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sendWorkers" })
  sendWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=typ" })
  typ?: DataExporterConfigTypEnum;
}
