import { SpeakeasyBase } from "../../../internal/utils";
import { ColorDefinition } from "./colordefinition";
export declare class Colors extends SpeakeasyBase {
    calendar?: Map<string, ColorDefinition>;
    event?: Map<string, ColorDefinition>;
    kind?: string;
    updated?: Date;
}
