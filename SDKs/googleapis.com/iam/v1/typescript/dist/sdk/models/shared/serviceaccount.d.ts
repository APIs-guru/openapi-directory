import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service //
**/
export declare class ServiceAccountInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    etag?: string;
    name?: string;
}
/**
 * An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service //
**/
export declare class ServiceAccount extends SpeakeasyBase {
    description?: string;
    disabled?: boolean;
    displayName?: string;
    email?: string;
    etag?: string;
    name?: string;
    oauth2ClientId?: string;
    projectId?: string;
    uniqueId?: string;
}
