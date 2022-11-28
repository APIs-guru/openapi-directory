import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
export declare class ListDataSourceResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sources?: DataSource[];
}
