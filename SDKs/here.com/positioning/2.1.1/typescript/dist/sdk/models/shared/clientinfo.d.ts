import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the client
**/
export declare class ClientInfo extends SpeakeasyBase {
    firmware?: string;
    manufacturer: string;
    model: string;
    name: string;
    platform?: string;
    version: string;
}
