import { SpeakeasyBase } from "../../../internal/utils";
import { Moderator } from "./moderator";
export declare class Moderation extends SpeakeasyBase {
    isMuted?: boolean;
    moderator?: Moderator;
    reason?: string;
}
