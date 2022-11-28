import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input/Output statistics.
**/
export declare class LinodeStatsIo extends SpeakeasyBase {
    io?: number[][];
    swap?: number[][];
}
/**
 * IPv4 statistics.
**/
export declare class LinodeStatsNetv4 extends SpeakeasyBase {
    in?: number[][];
    out?: number[][];
    privateIn?: number[][];
    privateOut?: number[][];
}
/**
 * IPv6 statistics.
**/
export declare class LinodeStatsNetv6 extends SpeakeasyBase {
    in?: number[][];
    out?: number[][];
    privateIn?: number[][];
    privateOut?: number[][];
}
/**
 * CPU, IO, IPv4, and IPv6 statistics. Graph data, if available, is in "[timestamp, reading]" array format. Timestamp is a UNIX timestamp in EST.
 *
**/
export declare class LinodeStats extends SpeakeasyBase {
    cpu?: number[][];
    io?: LinodeStatsIo;
    netv4?: LinodeStatsNetv4;
    netv6?: LinodeStatsNetv6;
    title?: string;
}
