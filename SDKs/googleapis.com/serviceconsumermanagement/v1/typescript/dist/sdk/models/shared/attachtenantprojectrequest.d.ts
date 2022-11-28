import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to attach an existing project to the tenancy unit as a new tenant resource.
**/
export declare class AttachTenantProjectRequest extends SpeakeasyBase {
    externalResource?: string;
    reservedResource?: string;
    tag?: string;
}
