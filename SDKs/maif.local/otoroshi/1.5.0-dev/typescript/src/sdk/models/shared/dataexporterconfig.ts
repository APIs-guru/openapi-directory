import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
    Kafka = "kafka"
,    Pulsar = "pulsar"
,    File = "file"
,    Mailer = "mailer"
,    Elastic = "elastic"
,    Console = "console"
,    Custom = "custom"
}


// DataExporterConfig
/** 
 * Settings to export Otorshi events
**/
export class DataExporterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bufferSize" })
  bufferSize?: number;

  @Metadata({ data: "json, name=config" })
  config?: any;

  @Metadata({ data: "json, name=desc" })
  desc?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: string;

  @Metadata({ data: "json, name=filtering" })
  filtering?: Filtering;

  @Metadata({ data: "json, name=groupDuration" })
  groupDuration?: number;

  @Metadata({ data: "json, name=groupSize" })
  groupSize?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jsonWorkers" })
  jsonWorkers?: number;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projection" })
  projection?: Map<string, string>;

  @Metadata({ data: "json, name=sendWorkers" })
  sendWorkers?: number;

  @Metadata({ data: "json, name=typ" })
  typ?: DataExporterConfigTypEnum;
}
