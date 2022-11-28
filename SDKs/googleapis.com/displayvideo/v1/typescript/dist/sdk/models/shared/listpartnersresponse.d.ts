import { SpeakeasyBase } from "../../../internal/utils";
import { Partner } from "./partner";
export declare class ListPartnersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    partners?: Partner[];
}
