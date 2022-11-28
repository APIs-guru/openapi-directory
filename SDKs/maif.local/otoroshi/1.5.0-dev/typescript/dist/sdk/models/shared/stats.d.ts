import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Live stats for a service or globally
**/
export declare class Stats extends SpeakeasyBase {
    calls: number;
    concurrentHandledRequests: number;
    dataIn: number;
    dataInRate: number;
    dataOut: number;
    dataOutRate: number;
    duration: number;
    overhead: number;
    rate: number;
}
