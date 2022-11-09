import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Configuration for resources used by Airflow web server.
**/
export declare class WebServerResource extends SpeakeasyBase {
    cpu?: number;
    memoryGb?: number;
    storageGb?: number;
}
