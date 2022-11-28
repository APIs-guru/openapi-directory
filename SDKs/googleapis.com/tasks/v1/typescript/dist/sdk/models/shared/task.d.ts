import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaskLinks extends SpeakeasyBase {
    description?: string;
    link?: string;
    type?: string;
}
export declare class Task extends SpeakeasyBase {
    completed?: string;
    deleted?: boolean;
    due?: string;
    etag?: string;
    hidden?: boolean;
    id?: string;
    kind?: string;
    links?: TaskLinks[];
    notes?: string;
    parent?: string;
    position?: string;
    selfLink?: string;
    status?: string;
    title?: string;
    updated?: string;
}
