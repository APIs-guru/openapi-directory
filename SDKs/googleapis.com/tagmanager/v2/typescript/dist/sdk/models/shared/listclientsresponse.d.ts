import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
export declare class ListClientsResponse extends SpeakeasyBase {
    client?: Client[];
    nextPageToken?: string;
}
