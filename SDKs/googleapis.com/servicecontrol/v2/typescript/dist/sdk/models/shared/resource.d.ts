import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service.
**/
export declare class Resource extends SpeakeasyBase {
    annotations?: Map<string, string>;
    createTime?: string;
    deleteTime?: string;
    displayName?: string;
    etag?: string;
    labels?: Map<string, string>;
    location?: string;
    name?: string;
    service?: string;
    type?: string;
    uid?: string;
    updateTime?: string;
}
