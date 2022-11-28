import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A representation of a Google Cloud resource.
**/
export declare class Resource extends SpeakeasyBase {
    data?: Map<string, any>;
    discoveryDocumentUri?: string;
    discoveryName?: string;
    location?: string;
    parent?: string;
    resourceUrl?: string;
    version?: string;
}
