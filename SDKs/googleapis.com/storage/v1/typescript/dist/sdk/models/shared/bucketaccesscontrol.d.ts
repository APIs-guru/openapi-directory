import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The project team associated with the entity, if any.
**/
export declare class BucketAccessControlProjectTeam extends SpeakeasyBase {
    projectNumber?: string;
    team?: string;
}
/**
 * An access-control entry.
**/
export declare class BucketAccessControl extends SpeakeasyBase {
    bucket?: string;
    domain?: string;
    email?: string;
    entity?: string;
    entityId?: string;
    etag?: string;
    id?: string;
    kind?: string;
    projectTeam?: BucketAccessControlProjectTeam;
    role?: string;
    selfLink?: string;
}
