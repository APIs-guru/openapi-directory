import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Entity } from "./entity";
/**
 * The entity analysis response message.
**/
export declare class AnalyzeEntitiesResponse extends SpeakeasyBase {
    entities?: Entity[];
    language?: string;
}
