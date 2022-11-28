import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.
**/
export declare class Peer extends SpeakeasyBase {
    ip?: string;
    labels?: Map<string, string>;
    port?: string;
    principal?: string;
    regionCode?: string;
}
