import { SpeakeasyBase } from "../../../internal/utils";
import { DsRecord } from "./dsrecord";
/**
 * Configuration for an arbitrary DNS provider.
**/
export declare class CustomDns extends SpeakeasyBase {
    dsRecords?: DsRecord[];
    nameServers?: string[];
}
