import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SoftwareConfigOptionalComponentsEnum {
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
/**
 * Specifies the selection and config of software inside the cluster.
**/
export declare class SoftwareConfig extends SpeakeasyBase {
    imageVersion?: string;
    optionalComponents?: SoftwareConfigOptionalComponentsEnum[];
    properties?: Map<string, string>;
}
