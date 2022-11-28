import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The project team associated with the entity, if any.
**/
export declare class ObjectAccessControlProjectTeam extends SpeakeasyBase {
    projectNumber?: string;
    team?: string;
}
/**
 * An access-control entry.
**/
export declare class ObjectAccessControl extends SpeakeasyBase {
    bucket?: string;
    domain?: string;
    email?: string;
    entity?: string;
    entityId?: string;
    etag?: string;
    generation?: string;
    id?: string;
    kind?: string;
    object?: string;
    projectTeam?: ObjectAccessControlProjectTeam;
    role?: string;
    selfLink?: string;
}
