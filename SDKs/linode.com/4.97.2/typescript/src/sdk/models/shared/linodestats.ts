import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinodeStatsIo
/** 
 * Input/Output statistics.
**/
export class LinodeStatsIo extends SpeakeasyBase {
  @Metadata({ data: "json, name=io" })
  io?: number[][];

  @Metadata({ data: "json, name=swap" })
  swap?: number[][];
}


// LinodeStatsNetv4
/** 
 * IPv4 statistics.
**/
export class LinodeStatsNetv4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=in" })
  in?: number[][];

  @Metadata({ data: "json, name=out" })
  out?: number[][];

  @Metadata({ data: "json, name=private_in" })
  privateIn?: number[][];

  @Metadata({ data: "json, name=private_out" })
  privateOut?: number[][];
}


// LinodeStatsNetv6
/** 
 * IPv6 statistics.
**/
export class LinodeStatsNetv6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=in" })
  in?: number[][];

  @Metadata({ data: "json, name=out" })
  out?: number[][];

  @Metadata({ data: "json, name=private_in" })
  privateIn?: number[][];

  @Metadata({ data: "json, name=private_out" })
  privateOut?: number[][];
}


// LinodeStats
/** 
 * CPU, IO, IPv4, and IPv6 statistics. Graph data, if available, is in "[timestamp, reading]" array format. Timestamp is a UNIX timestamp in EST.
 * 
**/
export class LinodeStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpu" })
  cpu?: number[][];

  @Metadata({ data: "json, name=io" })
  io?: LinodeStatsIo;

  @Metadata({ data: "json, name=netv4" })
  netv4?: LinodeStatsNetv4;

  @Metadata({ data: "json, name=netv6" })
  netv6?: LinodeStatsNetv6;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
