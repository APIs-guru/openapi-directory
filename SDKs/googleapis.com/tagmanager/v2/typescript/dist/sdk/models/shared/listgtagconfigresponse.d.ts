import { SpeakeasyBase } from "../../../internal/utils";
import { GtagConfig } from "./gtagconfig";
export declare class ListGtagConfigResponse extends SpeakeasyBase {
    gtagConfig?: GtagConfig[];
    nextPageToken?: string;
}
