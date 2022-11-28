import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about how to reach this Contact by phone.
 *
**/
export declare class ManagedContactPhone extends SpeakeasyBase {
    primary?: string;
    secondary?: string;
}
/**
 * Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
 *
**/
export declare class ManagedContactInput extends SpeakeasyBase {
    email?: string;
    group?: string;
    name?: string;
    phone?: ManagedContactPhone;
}
/**
 * Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
 *
**/
export declare class ManagedContact extends SpeakeasyBase {
    email?: string;
    group?: string;
    id?: number;
    name?: string;
    phone?: ManagedContactPhone;
    updated?: Date;
}
