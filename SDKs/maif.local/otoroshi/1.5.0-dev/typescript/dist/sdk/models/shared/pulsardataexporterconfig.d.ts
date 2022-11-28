import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for kafka access
**/
export declare class PulsarDataExporterConfig extends SpeakeasyBase {
    namespace: string;
    tenant: string;
    topic: string;
    uri: string[];
}
