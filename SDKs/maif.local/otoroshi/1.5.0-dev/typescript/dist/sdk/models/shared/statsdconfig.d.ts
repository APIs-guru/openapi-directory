import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for statsd metrics push
**/
export declare class StatsdConfig extends SpeakeasyBase {
    datadog: boolean;
    host: string;
    port: number;
}
