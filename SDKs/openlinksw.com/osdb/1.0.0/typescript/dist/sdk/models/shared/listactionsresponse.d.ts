import { SpeakeasyBase } from "../../../internal/utils";
import { ActionDescription } from "./actiondescription";
export declare enum ListActionsResponseStatusEnum {
    Success = "success"
}
export declare class ListActionsResponse extends SpeakeasyBase {
    api: string;
    method: string;
    response: ActionDescription[];
    status: ListActionsResponseStatusEnum;
}
