import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Alternative identifier for a course. An alias uniquely identifies a course. It must be unique within one of the following scopes: * domain: A domain-scoped alias is visible to all users within the alias creator's domain and can be created only by a domain admin. A domain-scoped alias is often used when a course has an identifier external to Classroom. * project: A project-scoped alias is visible to any request from an application using the Developer Console project ID that created the alias and can be created by any project. A project-scoped alias is often used when an application has alternative identifiers. A random value can also be used to avoid duplicate courses in the event of transmission failures, as retrying a request will return `ALREADY_EXISTS` if a previous one has succeeded.
**/
export declare class CourseAlias extends SpeakeasyBase {
    alias?: string;
}
