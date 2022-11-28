import { SpeakeasyBase } from "../../../internal/utils";
import { Command } from "./command";
/**
 * A person or group that can be used as a creator or a contact.
**/
export declare class Contact extends SpeakeasyBase {
    acceptCommands?: Command[];
    acceptTypes?: string[];
    displayName?: string;
    id?: string;
    imageUrls?: string[];
    kind?: string;
    phoneNumber?: string;
    priority?: number;
    sharingFeatures?: string[];
    source?: string;
    speakableName?: string;
    type?: string;
}
