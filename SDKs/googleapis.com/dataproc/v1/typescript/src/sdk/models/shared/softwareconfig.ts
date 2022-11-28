import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SoftwareConfigOptionalComponentsEnum {
    ComponentUnspecified = "COMPONENT_UNSPECIFIED",
    Anaconda = "ANACONDA",
    Docker = "DOCKER",
    Druid = "DRUID",
    Flink = "FLINK",
    Hbase = "HBASE",
    HiveWebhcat = "HIVE_WEBHCAT",
    Jupyter = "JUPYTER",
    Presto = "PRESTO",
    Trino = "TRINO",
    Ranger = "RANGER",
    Solr = "SOLR",
    Zeppelin = "ZEPPELIN",
    Zookeeper = "ZOOKEEPER"
}


// SoftwareConfig
/** 
 * Specifies the selection and config of software inside the cluster.
**/
export class SoftwareConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageVersion" })
  imageVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=optionalComponents" })
  optionalComponents?: SoftwareConfigOptionalComponentsEnum[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;
}
