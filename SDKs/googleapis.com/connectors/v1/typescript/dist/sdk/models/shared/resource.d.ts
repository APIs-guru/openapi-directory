import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResourceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GcpProject = "GCP_PROJECT",
    GcpResource = "GCP_RESOURCE",
    GcpSecretmanagerSecret = "GCP_SECRETMANAGER_SECRET",
    GcpSecretmanagerSecretVersion = "GCP_SECRETMANAGER_SECRET_VERSION"
}
/**
 * Resource definition
**/
export declare class Resource extends SpeakeasyBase {
    pathTemplate?: string;
    type?: ResourceTypeEnum;
}
