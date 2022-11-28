import { SpeakeasyBase } from "../../../internal/utils";
import { EntryPoint } from "./entrypoint";
export declare class ActionDescription extends SpeakeasyBase {
    actionId: string;
    description?: string;
    entryPoint: EntryPoint;
}
