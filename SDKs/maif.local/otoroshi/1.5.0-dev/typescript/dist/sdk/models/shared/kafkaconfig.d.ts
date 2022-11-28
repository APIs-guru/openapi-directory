import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for kafka access
**/
export declare class KafkaConfig extends SpeakeasyBase {
    keyPass?: string;
    keyStore?: string;
    servers: string[];
    topic?: string;
    trustore?: string;
}
