import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on.
**/
export declare class ResourceId extends SpeakeasyBase {
    id?: string;
    type?: string;
}
