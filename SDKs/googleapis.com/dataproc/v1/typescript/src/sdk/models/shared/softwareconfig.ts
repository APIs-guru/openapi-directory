import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SoftwareConfigOptionalComponentsEnum {
    ComponentUnspecified = "COMPONENT_UNSPECIFIED"
,    Anaconda = "ANACONDA"
,    Docker = "DOCKER"
,    Druid = "DRUID"
,    Flink = "FLINK"
,    Hbase = "HBASE"
,    HiveWebhcat = "HIVE_WEBHCAT"
,    Jupyter = "JUPYTER"
,    Presto = "PRESTO"
,    Ranger = "RANGER"
,    Solr = "SOLR"
,    Zeppelin = "ZEPPELIN"
,    Zookeeper = "ZOOKEEPER"
}


// SoftwareConfig
/** 
 * Specifies the selection and config of software inside the cluster.
**/
export class SoftwareConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageVersion" })
  imageVersion?: string;

  @Metadata({ data: "json, name=optionalComponents" })
  optionalComponents?: SoftwareConfigOptionalComponentsEnum[];

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;
}
